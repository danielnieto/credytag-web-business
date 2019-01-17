import {ChargeStatus} from './charge-status';

export interface Purchase {
    branch_id: string;
    buyer_id: string;
    code_id: string;
    conekta_order_id: string;
    created_at: string;
    id: string;
    lat: string;
    lng: string;
    order_status: ChargeStatus;
    payment_id: string;
    tip: string;
    total: string;
    transaction: string;
    updated_at: string;
    map_url: string;
    fee: string;
    payment: { last4: string, brand: string };
    code: { name: string, qr: string, description: string };
    buyer: { firstname: string, lastname: string };
}
