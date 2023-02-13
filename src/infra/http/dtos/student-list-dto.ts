import { IsNumber } from "class-validator";

export class StudentListDTO {
  @IsNumber()
  per_page: number;

  @IsNumber()
  page: number;
}
