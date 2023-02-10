import { Student } from "@applications/entities/Student";
import { FirebaseStudentRepository } from "@infra/database/firebase/repositories/firebase-student-repository";
import { PrismaStudentRepository } from "@infra/database/prisma/repositories/prisma-student-repository";
import { Body, Controller, Post } from "@nestjs/common";
import { StudentCreateBodyDTO } from "../dtos/student-create-body-dto";
import { StudentViewModels } from "../view-models/student-view-models";

@Controller("students")
export class StudentController {
  constructor(
    private firebaseStudentRepository: FirebaseStudentRepository,
    private prismaStudentRepository: PrismaStudentRepository
  ) {}

  @Post()
  async create(@Body() body: StudentCreateBodyDTO) {
    const { avatar_url, email, username, password } = body;
    console.log(avatar_url, email, username, password);

    const student = new Student({
      email,
      displayName: username,
      photoUrl: avatar_url,
      password,
    });

    const studentOnFirebase = await this.firebaseStudentRepository.create(
      student
    );

    const studentOnPrisma = await this.prismaStudentRepository.create(
      studentOnFirebase
    );

    console.log(studentOnFirebase, studentOnPrisma);

    return StudentViewModels.toHttp(studentOnPrisma);
  }
}
