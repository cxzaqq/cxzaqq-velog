import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import {
  LoggerMiddleware,
  logger,
} from './common/middleware/logger.middleware';
import { CatsController } from './cats/cats.controller';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpExceptionFilter } from './common/filter/http-exception.filter';
import { RolesGuard } from './roles/roles.guard';
import { LoggingInterceptor } from './common/interceptor/logging.interceptor';
import { TransformInterceptor } from './common/interceptor/transform.interceptor';
import { ExcludeNullInterceptor } from './common/interceptor/excludeNull.interceptor';
import { ErrorsInterceptor } from './common/interceptor/errors.interceptor';
import { TimeoutInterceptor } from './common/interceptor/timeout.interceptor';
import { UserModule } from './user/user.module';

@Module({
  imports: [CatsModule, UserModule],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
    {
      provide: APP_INTERCEPTOR,
      useClass: TimeoutInterceptor,
    },
  ],
})
export class AppModule {}
/* class-based
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes(CatsController);
  }
}
*/
/*
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        {
          path: 'cats',
          method: RequestMethod.GET,
        },
        { path: 'cats', method: RequestMethod.POST },
        `cats/(.*)`,
      )
      .forRoutes(CatsController);
  }
}
*/
