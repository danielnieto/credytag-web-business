import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { QrcodesService} from '../../qrcodes.service';

@Component({
    selector: 'app-qrcodes',
    templateUrl: './qrcodes.component.html',
    styleUrls: ['./qrcodes.component.scss', '../../content/page-title.scss'],
    providers: [QrcodesService]
})
export class QrcodesComponent implements OnInit {

    modalRef: BsModalRef;
    newQrName:string;
    newQrPhone: string;
    newQrDescription: string;

    qrCodes = [
        {
            name: 'caja 1',
            qrId: '#ASD32D',
            phone: '(33) 3312 4567',
            enabled: true
        },
        {
            name: 'caja 2',
            qrId: '#HK8SNS',
            phone: '(33) 1234 5678',
            enabled: true
        },
        {
            name: 'caja 2',
            qrId: '#HK8SNS',
            phone: '(33) 1234 5678',
            enabled: false
        },
        {
            name: 'caja 2',
            qrId: '#HK8SNS',
            phone: '(33) 1234 5678',
            enabled: true
        },
        {
            name: 'caja 2',
            qrId: '#HK8SNS',
            phone: '(33) 1234 5678',
            enabled: true
        },
        {
            name: 'caja 2',
            qrId: '#HK8SNS',
            phone: '(33) 1234 5678',
            enabled: true
        },
        {
            name: 'caja 2',
            qrId: '#HK8SNS',
            phone: '(33) 1234 5678',
            enabled: false
        },
        {
            name: 'caja 2',
            qrId: '#HK8SNS',
            phone: '(33) 1234 5678',
            enabled: true
        },
        {
            name: 'caja 2',
            qrId: '#HK8SNS',
            phone: '(33) 1234 5678',
            enabled: true
        },
        {
            name: 'caja 2',
            qrId: '#HK8SNS',
            phone: '(33) 1234 5678',
            enabled: false
        },
        {
            name: 'caja 2',
            qrId: '#HK8SNS',
            phone: '(33) 1234 5678',
            enabled: true
        },
        {
            name: 'caja 3',
            qrId: '#ASD32D',
            phone: '(33) 3312 4567',
            enabled: false
        },
        {
            name: 'caja 1',
            qrId: '#ASD32D',
            phone: '(33) 3312 4567',
            enabled: true
        }
    ];

    constructor(private modalService: BsModalService, private qrService: QrcodesService) {

    }

    register(){

        this.qrService.register(this.newQrName, this.newQrDescription, this.newQrPhone).then((result)=>{
            
            alert("QR Added!");
            console.log(result);
            this.modalRef.hide();

        }).catch(err => console.log(err));
    }

    ngOnInit() {

    }

    openModal(template: TemplateRef<any>) {
        
        this.newQrDescription = null;
        this.newQrPhone = null;
        this.newQrName = null;

        this.modalRef = this.modalService.show(template, Object.assign({},
            { class: 'modal-credytag', animated: false, keyboard: true, ignoreBackdropClick: true, show: true }
        ));
    }

    showCode(code: any) {
        alert(`Show: ${code.qrId}`);
    }

    editCode(code: any) {
        alert(`Edit: ${code.qrId}`);
    }

    downloadCode(code: any) {
        alert(`Download: ${code.qrId}`);
    }

}
