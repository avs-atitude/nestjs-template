import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.replace('Bearer ', '');

    if (token) {
      try {
        const decoded = this.jwtService.verify(token);
        request.user = decoded;
        return true;
      } catch (error) {
        // Token inválido
        return false;
      }
    } else {
      // Token ausente
      return false;
    }
  }
}
