import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { QrcodesService} from '../../qrcodes.service';
import { QrCode } from '../../qrCode';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-qrcodes',
    templateUrl: './qrcodes.component.html',
    styleUrls: ['./qrcodes.component.scss', '../../content/page-title.scss'],
    providers: [QrcodesService]
})
export class QrcodesComponent implements OnInit {

    modalRef: BsModalRef;

    qrToShow: string;
    updateQrData: {id: string, name:string , phone: string, description: string, readonly qr: string};

    createQrForm: FormGroup;

    @ViewChild('templateCreateQr') templateCreateQr: TemplateRef<any>;
    @ViewChild('templateUpdateQr') templateUpdateQr: TemplateRef<any>;
    @ViewChild('templateShowQr') templateShowQr: TemplateRef<any>;

    qrCodes: QrCode[] = [];

    constructor(private modalService: BsModalService, private qrService: QrcodesService) {

    }

    ngOnInit() {

       this.getCodes();

    }

    openModal(template: TemplateRef<any>) {

        this.modalRef = this.modalService.show(template, Object.assign({},
            { class: 'modal-credytag', animated: false, keyboard: true, ignoreBackdropClick: true, show: true }
        ));

    }

    closeModal(){
        this.modalRef.hide();
    }

    showShowQrModal(code: any) {
        this.qrToShow = code.qr;
        this.openModal(this.templateShowQr);
    }

    showCreateQrModal() {
        
        this.createQrForm = new FormGroup({
            name: new FormControl(null, [Validators.required]),
            phone: new FormControl(null, [Validators.required]),
            description: new FormControl(null, [Validators.required])
        });

        this.openModal(this.templateCreateQr);
    }

    showUpdateQrModal(code: any) {
        // alert(JSON.stringify(code));
        this.updateQrData = {...code};
        this.openModal(this.templateUpdateQr);
    }

    showDownloadQrModal(code: any) {
        alert(`Download: ${code.qr}`);
    }

    create() {

        const formValues = this.createQrForm.value;

        this.qrService.createQr(formValues.name, formValues.description, formValues.phone).then((result) => {

            this.closeModal();
            this.getCodes();

        }).catch(err => console.log(err));
    }

    update(){
        this.qrService.updateQr(this.updateQrData).then((result) => {

            this.closeModal();
            this.getCodes();

        }).catch(err => console.log(err));
    }

    getCodes(): void{

        this.qrService.getCodes().then((qrCodes: QrCode[])=>{
            this.qrCodes = qrCodes;
        }).catch((error: any) => {
            console.log(error);
        })

    }

}
