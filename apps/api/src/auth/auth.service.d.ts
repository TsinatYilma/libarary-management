import { AuthDto } from './dto/auth.dto';
import { UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<UserDocument>, jwtService: JwtService);
    getToken(userEmail: string, userRole: string): string;
    signup(dto: AuthDto): Promise<{
        token: string;
    }>;
    login(dto: AuthDto): Promise<{
        token: string;
    }>;
}
