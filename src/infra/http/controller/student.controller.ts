import { Student } from "@applications/entities/Student";
import { StudentListUseCase } from "@applications/useCases/Student/StudentListUseCase";
import { FirebaseStudentRepository } from "@infra/database/firebase/repositories/firebase-student-repository";
import { PrismaStudentRepository } from "@infra/database/prisma/repositories/prisma-student-repository";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { StudentCreateBodyDTO } from "../dtos/student-create-body-dto";
import { StudentListDTO } from "../dtos/student-list-dto";
import { StudentViewModels } from "../view-models/student-view-models";

@Controller("students")
export class StudentController {
  constructor(
    private firebaseStudentRepository: FirebaseStudentRepository,
    private prismaStudentRepository: PrismaStudentRepository,
    private studentList: StudentListUseCase
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

  @Get()
  async listAll(@Body() body: StudentListDTO) {
    const { page, per_page } = body;

    const { current_page, students, total } = await this.studentList.execute({
      page,
      per_page,
    });

    return {
      current_page,
      per_page,
      total,
      students: students.map(StudentViewModels.toHttp),
    };
  }
}
