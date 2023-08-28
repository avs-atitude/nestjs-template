import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private userService: UserService
    ) { }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findByEmail(email);

        if(user && user.password === password) {
            const { id, email, name } = user;
            return { id, email, name };
        }

        return null;
    }

    async login(user: any) {
        const payload = { sub: user.id, email: user.email, name: user.name };

        return {
            access_token: this.jwtService.sign(payload)
        };
    }

    async verifyToken(token: string): Promise<any> {
        try{
            return await this.jwtService.verifyAsync(token);
        } catch (error) {
            throw new Error('Token validation error');
        }
    }
}
