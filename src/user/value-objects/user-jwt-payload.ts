import { StaffRole } from "../enum/role.enum";

export interface UserJWTPayload {
    sub: string;
    subscriptionId: string;
    roles: StaffRole[]
}