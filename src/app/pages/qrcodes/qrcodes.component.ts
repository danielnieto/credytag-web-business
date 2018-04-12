import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
    selector: 'app-qrcodes',
    templateUrl: './qrcodes.component.html',
    styleUrls: ['./qrcodes.component.scss', '../../content/page-title.scss']
})
export class QrcodesComponent implements OnInit {

    modalRef: BsModalRef;

    qrCodes = [
        {
            name: "caja 1",
            qrId: "#ASD32D",
            phone: "(33) 3312 4567",
            enabled: true
        },
        {
            name: "caja 2",
            qrId: "#HK8SNS",
            phone: "(33) 1234 5678",
            enabled: true
        },
        {
            name: "caja 2",
            qrId: "#HK8SNS",
            phone: "(33) 1234 5678",
            enabled: false
        },
        {
            name: "caja 2",
            qrId: "#HK8SNS",
            phone: "(33) 1234 5678",
            enabled: true
        },
        {
            name: "caja 2",
            qrId: "#HK8SNS",
            phone: "(33) 1234 5678",
            enabled: true
        },
        {
            name: "caja 2",
            qrId: "#HK8SNS",
            phone: "(33) 1234 5678",
            enabled: true
        },
        {
            name: "caja 2",
            qrId: "#HK8SNS",
            phone: "(33) 1234 5678",
            enabled: false
        },
        {
            name: "caja 2",
            qrId: "#HK8SNS",
            phone: "(33) 1234 5678",
            enabled: true
        },
        {
            name: "caja 2",
            qrId: "#HK8SNS",
            phone: "(33) 1234 5678",
            enabled: true
        },
        {
            name: "caja 2",
            qrId: "#HK8SNS",
            phone: "(33) 1234 5678",
            enabled: false
        },
        {
            name: "caja 2",
            qrId: "#HK8SNS",
            phone: "(33) 1234 5678",
            enabled: true
        },
        {
            name: "caja 3",
            qrId: "#ASD32D",
            phone: "(33) 3312 4567",
            enabled: false
        },
        {
            name: "caja 1",
            qrId: "#ASD32D",
            phone: "(33) 3312 4567",
            enabled: true
        }
    ];

    constructor(private modalService: BsModalService) {}

    ngOnInit() {

    }

    openModal(template: TemplateRef<any>) {
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
