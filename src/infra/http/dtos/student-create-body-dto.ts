import { IsEmail, IsUrl, Length } from "class-validator";

export class StudentCreateBodyDTO {
  @IsEmail()
  @Length(1, 255)
  email: string;

  @Length(1, 255)
  password: string;

  @Length(1, 255)
  username: string;

  @IsUrl()
  avatar_url: string;
}
