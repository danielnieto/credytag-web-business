import {ChargeStatus} from './charge-status';

export class Charge{
    id: string;
    client: string;
    timestamp: string;
    sell: number;
    qrCode: string;
    qrName: string;
    comission: number;
    map: any;
    sms: number;
    paidWith: string;
    status: ChargeStatus;
    collapsed?: boolean;
}
