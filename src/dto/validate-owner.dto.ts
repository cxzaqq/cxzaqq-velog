import { IsString } from 'class-validator';

export class ValidateOwnerDto {
  @IsString()
  b_no: String;

  @IsString()
  start_dt: String;

  @IsString()
  p_nm: String;
}

/*
공공데이터 api 조회를 위한 필수 데이터셋
{
  "businesses": [
    {
      "b_no":       사업자 등록 번호,
      "start_dt":   개업일자 yyyymmdd,
      "p_nm":       대표자성명
    }
  ]
}
*/
