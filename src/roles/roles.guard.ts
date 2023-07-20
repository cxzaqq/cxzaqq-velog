import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  static matchRoles(roles) {
    if (roles === 'user') return false;
    if (roles === 'admin') return true;
    return false;
  }

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    // console.log(roles, !roles, user);

    return RolesGuard.matchRoles(roles[0]);
  }
}
