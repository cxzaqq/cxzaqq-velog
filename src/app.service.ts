import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { ValidateOwnerDto } from './dto/validate-owner.dto';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async validateOwner(body: ValidateOwnerDto) {
    const datas = {
      businesses: [
        {
          b_no: body.b_no,
          start_dt: body.start_dt,
          p_nm: body.p_nm,
        },
      ],
    };
    const url =
      'http://api.odcloud.kr/api/nts-businessman/v1/validate?returnType=JSON';
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Infuser ${process.env.API_KEY}`,
      },
    };
    const { data } = await firstValueFrom(
      this.httpService.post(url, datas, config).pipe(
        catchError((error: AxiosError) => {
          console.log('error', error);
          throw 'An error happened!';
        }),
      ),
    );

    return { ...data };
  }
}
