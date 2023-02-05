import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { EmployeeRepository } from "@applications/repositories/employee-repository";
import { PrismaEmployeeRepositories } from "./prisma/repositories/prisma-employee-repository";
import { SupportRepository } from "@applications/repositories/support-repository";
import { PrismaSupportRepositories } from "./prisma/repositories/prisma-support-repository";

@Module({
  providers: [
    PrismaService,
    { provide: EmployeeRepository, useClass: PrismaEmployeeRepositories },
    { provide: SupportRepository, useClass: PrismaSupportRepositories },
  ],
  exports: [EmployeeRepository, SupportRepository],
})
export class DatabaseModule {}
