import { Strategy } from 'passport-local';
declare const AdminAuthStrategy_base: new (...args: any[]) => Strategy;
export declare class AdminAuthStrategy extends AdminAuthStrategy_base {
    constructor();
    validate(payload: any): Promise<{
        roles: any;
        sub: any;
        subscriptionId: any;
    }>;
}
export {};
