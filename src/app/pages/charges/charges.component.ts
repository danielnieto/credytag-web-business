import { Component, OnInit } from '@angular/core';

import { Charge } from '../../charge';
import { ChargeStatus } from '../../charge-status';

import { ChargesService } from '../../charges.service';

import { defineLocale } from 'ngx-bootstrap/bs-moment';
import { es } from 'ngx-bootstrap/locale';
import { DatePipe } from '@angular/common';

import { ToastrService } from 'ngx-toastr';

import { Purchase } from '../../purchase';

defineLocale('es', es);

@Component({
    selector: 'app-charges',
    templateUrl: './charges.component.html',
    styleUrls: ['./charges.component.scss', '../../content/page-title.scss'],
    providers: [ChargesService, DatePipe]
})
export class ChargesComponent implements OnInit {
    charges: Charge[] = [];
    datePickerValue = new Date();
    today = new Date();

    datePickerConfig = {
        'containerClass': 'theme-credytag',
        'showWeekNumbers': false,
        'locale': 'es'
    };

    constructor(private chargesService: ChargesService, private datePipe: DatePipe, private toastr: ToastrService) {}

    ngOnInit() {
        this.fetchCharges();
    }

    onToggleCollapse(charge: Charge) {
        charge.collapsed = !charge.collapsed;
    }

    onClickToday(): void {
        this.datePickerValue = this.today;
    }

    onClickPreviousDay(): void {
        this.datePickerValue = this.addDays(this.datePickerValue, -1);
    }

    onClickNextDay(): void {
        if (this.isToday()) {
            return;
        }
        this.datePickerValue = this.addDays(this.datePickerValue, 1);
    }

    addDays(date, days): Date {
        const result = new Date(date);
        return new Date(result.setDate(result.getDate() + days));
    }

    statusText(charge): string {
        let text: string;

        switch (charge.status) {
            case ChargeStatus.deposited:
                text = 'depositado';
                break;
            case ChargeStatus.paid:
                text = 'pagado';
                break;
            case ChargeStatus.declined:
                text = 'declinado';
                break;
            case ChargeStatus.fraudulent:
                text = 'fraudulento';
                break;
            case ChargeStatus.refunded:
                text = 'reembolsado';
                break;
            case ChargeStatus.frozen:
                text = 'congelado';
                break;
        }

        return text;
    }

    isToday(): boolean {
        const a = this.today;
        const b = this.datePickerValue;

        return a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear();
    }

    async fetchCharges() {

        const date = this.datePipe.transform(this.datePickerValue, 'yyyy-MM-dd');

        try {

            const chargesResponse: {data: {purchases}} = await this.chargesService.getCharges(date);

            if (chargesResponse !== null) {

                const purchases = [];

                chargesResponse.data.purchases.forEach((purchase: Purchase) => {

                    purchases.push({
                        id: purchase.transaction,
                        client: `${purchase.buyer.firstname} ${purchase.buyer.lastname}`,
                        timestamp: purchase.created_at,
                        sell: purchase.total,
                        commission: 0,
                        map: purchase.map_url,
                        sms: 0,
                        paidWith: `${purchase.payment.brand} x-${purchase.payment.last4}`,
                        qrCode: purchase.code.qr,
                        qrName: purchase.code.name,
                        status: purchase.order_status,
                        collapsed: true
                    });
                });

                this.charges = purchases;
            } else {
                this.charges = [];
            }

        } catch (error) {
            this.toastr.error('Ocurrió un error obteniendo los cobros');
            console.log(error);
        }


    }


}
