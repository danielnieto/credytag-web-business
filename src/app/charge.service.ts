import { Injectable } from '@angular/core';
import {Charge} from './charge';
import {ChargeStatus} from './charge-status';
import {CHARGES} from './mock/mock-charges';

@Injectable()
export class ChargeService {

  constructor() { }

  getCharges():Charge[]{
      return CHARGES;
  }

}
