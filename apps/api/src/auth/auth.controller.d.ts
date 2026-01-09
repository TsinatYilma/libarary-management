import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: AuthDto): Promise<{
        token: string;
    }>;
    login(dto: AuthDto): Promise<{
        token: string;
    }>;
}
