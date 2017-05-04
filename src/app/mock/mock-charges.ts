import {Charge} from '../charge';
import {ChargeStatus} from '../charge-status';

export const CHARGES: Charge[] = [
    {
        id: "0223456389042",
        client: "samuel heany",
        timestamp: "01:23 PM",
        sell: 202,
        comission: 2,
        sms: 0,
        paidWith: "Visa x-4128",
        qrCode: "#HWUMXC",
        qrName: "caja1",
        status: ChargeStatus.deposited,
        collapsed: true
    },
    {
        id: "1123456289052",
        client: "alberto rodriguez",
        timestamp: "02:49 PM",
        sell: 202,
        comission: 2,
        sms: 0,
        paidWith: "Visa x-4937",
        qrCode: "#HJTFDD",
        qrName: "caja1",
        status: ChargeStatus.paid,
        collapsed: true
    },
    {
        id: "0183457783022",
        client: "enrique gonzalez",
        timestamp: "05:51 PM",
        sell: 2345,
        comission: 245.5,
        sms: 1.5,
        paidWith: "Visa x-2997",
        qrCode: "#HJYXCE",
        qrName: "caja1",
        status: ChargeStatus.fraudulent,
        collapsed: true
    },
    {
        id: "0183457783022",
        client: "daniel nieto",
        timestamp: "08:07 PM",
        sell: 1268,
        comission: 245.5,
        sms: 1.5,
        paidWith: "Visa x-3422",
        qrCode: "#KJTVCD",
        qrName: "caja1",
        status: ChargeStatus.frozen,
        collapsed: true
    },
    {
        id: "0183457775014",
        client: "erika mejia",
        timestamp: "08:07 PM",
        sell: 1268,
        comission: 245.5,
        sms: 1.5,
        paidWith: "Visa x-3422",
        qrCode: "#KJTVCD",
        qrName: "caja1",
        status: ChargeStatus.declined,
        collapsed: true
    },
    {
        id: "0183455763010",
        client: "roberto lopez",
        timestamp: "08:07 PM",
        sell: 1268,
        comission: 245.5,
        sms: 1.5,
        paidWith: "Visa x-3422",
        qrCode: "#KJTVCD",
        qrName: "caja1",
        status: ChargeStatus.refunded,
        collapsed: true
    }
];
