import { Component, OnInit } from '@angular/core';

import {Charge} from '../../charge';
import {ChargeStatus} from '../../charge-status';

import {ChargeService} from '../../charge.service';

import { defineLocale } from 'ngx-bootstrap/bs-moment';
import { es } from 'ngx-bootstrap/locale';
defineLocale('es', es);

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.css', '../../content/page-title.scss'],
  providers: [ChargeService]
})
export class ChargesComponent implements OnInit {
  charges: Charge[];
  datePickerValue = new Date();
  today = new Date();

    datePickerConfig = {
        'containerClass': 'theme-credytag',
        'showWeekNumbers': false,
        'locale': 'es'
    };

  constructor(private chargeService: ChargeService) {}

  ngOnInit() {
    this.charges = this.chargeService.getCharges();
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
            text = "depositado"
        break;
      case ChargeStatus.paid:
            text = "pagado"
        break;
      case ChargeStatus.declined:
            text = "declinado"
        break;
      case ChargeStatus.fraudulent:
            text = "fraudulento"
        break;
      case ChargeStatus.refunded:
            text = "reembolsado"
        break;
      case ChargeStatus.frozen:
            text = "congelado"
        break;
    }

    return text;
  }
}
