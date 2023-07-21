import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    let request = ctx.switchToHttp().getRequest();
    const user = {
      id: 101,
      firstName: 'Alan',
      lastName: 'Turing',
      email: 'alan@email.com',
      roles: ['admin'],
    };
    request = { ...request, user };
    return data ? request.user?.[data] : request.user;
  },
);
