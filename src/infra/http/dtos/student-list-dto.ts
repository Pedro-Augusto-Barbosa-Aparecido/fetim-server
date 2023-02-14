import { IsNumber, IsOptional, Length } from "class-validator";

export class StudentListDTO {
  @IsNumber()
  per_page: number;

  @IsNumber()
  page: number;

  @IsNumber()
  @IsOptional()
  registration: number;

  @Length(1, 255)
  @IsOptional()
  username: string;
}
