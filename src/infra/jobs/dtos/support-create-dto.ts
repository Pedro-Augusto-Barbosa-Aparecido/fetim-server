import { IsEmail, Length } from "class-validator";

export class CreateSupportDTO {
  @Length(1, 255)
  message: string;

  @IsEmail()
  @Length(1, 255)
  requester: string;
}
