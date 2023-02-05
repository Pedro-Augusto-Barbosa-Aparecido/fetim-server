// import { PrismaEmployeeMapper } from "./../mappers/prisma-employee-mapper";
import { EmployeeRepository } from "@applications/repositories/employee-repository";
import { PrismaService } from "../prisma.service";
import { Injectable } from "@nestjs/common";
import { Employee } from "@applications/entities/employee";

@Injectable()
export class PrismaEmployeeRepositories implements EmployeeRepository {
  constructor(private prisma: PrismaService) {}

  async create(employee: Employee): Promise<void> {
    // const raw = PrismaEmployeeMapper.toPrisma(employee);
    // await this.prisma.employee.create({
    //   data: {
    //     email: raw.email,
    //     name: raw.name,
    //     phone_number: raw.phone_number,
    //   },
    // });
  }
}
