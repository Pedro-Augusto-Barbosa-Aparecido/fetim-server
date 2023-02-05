import { IsEmail, Length, IsPhoneNumber } from "class-validator";

export class CreateEmployeeDTO {
  @IsEmail()
  email: string;

  @Length(5, 20)
  name: string;

  @IsPhoneNumber()
  phoneNumber: string;
}
