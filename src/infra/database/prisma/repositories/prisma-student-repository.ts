import { Student } from "@applications/entities/Student";
import { StudentRepository } from "@applications/repositories/student-repository";
import { PrismaService } from "../prisma.service";
import { Injectable } from "@nestjs/common";
import { PrismaStudentMapper } from "../mappers/prisma-student-mapper";

@Injectable()
export class PrismaStudentRepository implements StudentRepository {
  constructor(private prisma: PrismaService) {}

  async create(student: Student): Promise<Student> {
    const raw = PrismaStudentMapper.toPrisma(student);

    const studentInPrisma = await this.prisma.student.create({
      data: raw,
    });

    return PrismaStudentMapper.toDomain(studentInPrisma);
  }
}
