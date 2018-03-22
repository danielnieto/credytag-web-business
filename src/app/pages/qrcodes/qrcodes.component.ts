import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-qrcodes',
    templateUrl: './qrcodes.component.html',
    styleUrls: ['./qrcodes.component.scss', '../../content/page-title.scss']
})
export class QrcodesComponent implements OnInit {

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


    constructor() {}

    ngOnInit() {}

}
