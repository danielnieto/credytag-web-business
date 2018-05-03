import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { QrcodesService} from '../../qrcodes.service';
import { QrCode } from '../../qrCode';

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

    @ViewChild('templateAddQr') templateAddQr: TemplateRef<any>;
    qrCodes: QrCode[] = [];

    constructor(private modalService: BsModalService, private qrService: QrcodesService) {

    }

    register(){

        this.qrService.register(this.newQrName, this.newQrDescription, this.newQrPhone).then((result)=>{
            
            this.closeModal();
            this.getCodes();

        }).catch(err => console.log(err));
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

    showCode(code: any) {
        alert(`Show: ${code.qrId}`);
    }

    addCode() {
        this.newQrDescription = null;
        this.newQrPhone = null;
        this.newQrName = null;
        this.openModal(this.templateAddQr);
    }

    editCode(code: any) {
        alert(`Edit: ${code.qrId}`);
    }

    downloadCode(code: any) {
        alert(`Download: ${code.qrId}`);
    }

    getCodes(): void{

        this.qrService.getCodes().then((qrCodes: QrCode[])=>{
            this.qrCodes = qrCodes;
        }).catch((error: any) => {
            console.log(error);
        })

    }

}
