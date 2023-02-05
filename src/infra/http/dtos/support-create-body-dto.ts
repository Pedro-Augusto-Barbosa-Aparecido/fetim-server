import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class CreateSupportBody {
  @IsNotEmpty()
  @Length(1, 255)
  message: string;

  @IsNotEmpty()
  @IsEmail()
  requester: string;
}
