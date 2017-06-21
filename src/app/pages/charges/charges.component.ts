import { Component, OnInit } from '@angular/core';

import {Charge} from '../../charge';
import {ChargeStatus} from '../../charge-status';

import {ChargeService} from '../../charge.service';

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.css', '../../content/page-title.scss'],
  providers: [ChargeService]
})
export class ChargesComponent implements OnInit {

  charges:Charge[];

  constructor(private chargeService: ChargeService) {

  }

  ngOnInit() {
      this.charges = this.chargeService.getCharges();
  }

  onToggleCollapse(charge:Charge){
      charge.collapsed = !charge.collapsed;
  }

  statusText(charge):string{

      let text: string;

      switch(charge.status){
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
