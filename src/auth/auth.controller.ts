import { AuthService } from './auth.service';
import { Body, Controller, Get, Header, Headers, Post } from "@nestjs/common";
import { LoginRequest, RegisterRequest } from 'src/shared/types';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('login')
    postLogin(@Body() data: LoginRequest) {
        return this.authService.login(data);
    }

    @Get('profile')
    getProfile(@Headers('Authorization') token: string) {
        return this.authService.getProfile(token);
    }
    @Post('register')
    postRegister(@Body() data: RegisterRequest) {
        return this.authService.register(data);
    }
}
