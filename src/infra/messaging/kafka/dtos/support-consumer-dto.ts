import { IsBoolean, Length } from "class-validator";

export class SupportConsumerDTO {
  @Length(1, 255)
  id: string;

  @IsBoolean()
  active: string;

  @Length(1, 255)
  requester: string;

  @Length(1, 600)
  message: string;
}
