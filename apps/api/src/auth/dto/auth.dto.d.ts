import { Role } from '../roles/role.enum';
export declare class AuthDto {
    readonly email: string;
    readonly password: string;
    readonly role: Role;
}
