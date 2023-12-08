import { Strategy } from 'passport-jwt';
declare const localStragegy_base: new (...args: any[]) => Strategy;
export declare class localStragegy extends localStragegy_base {
    constructor();
    validate(payload: any): Promise<{
        userId: any;
        username: any;
        nivelAcesso: any;
    }>;
}
export {};
