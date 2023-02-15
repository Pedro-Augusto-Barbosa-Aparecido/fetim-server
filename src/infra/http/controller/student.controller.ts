import { Student } from "@applications/entities/Student";
import { StudentGetByRegistration } from "@applications/useCases/Student/StudentGetByRegistration";
import { StudentListUseCase } from "@applications/useCases/Student/StudentListUseCase";
import { FirebaseStudentRepository } from "@infra/database/firebase/repositories/firebase-student-repository";
import { PrismaStudentRepository } from "@infra/database/prisma/repositories/prisma-student-repository";
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { StudentCreateBodyDTO } from "../dtos/student-create-body-dto";
import { StudentListDTO } from "../dtos/student-list-dto";
import { StudentViewModels } from "../view-models/student-view-models";

@Controller("students")
export class StudentController {
  constructor(
    private firebaseStudentRepository: FirebaseStudentRepository,
    private prismaStudentRepository: PrismaStudentRepository,
    private studentList: StudentListUseCase,
    private studentGetByRegistration: StudentGetByRegistration
  ) {}

  @Post()
  async create(@Body() body: StudentCreateBodyDTO) {
    const { avatar_url, email, username, password } = body;

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

    return StudentViewModels.toHttp(studentOnPrisma);
  }

  @Get(":registration")
  async getByRegistration(@Param("registration") registration: string) {
    const student = await this.studentGetByRegistration.execute({
      registration: Number(registration),
    });

    return {
      student: StudentViewModels.toHttp(student),
    };
  }

  @Get()
  async listAll(@Body() body: StudentListDTO) {
    const { page, per_page, registration, username } = body;

    const { current_page, students, total } = await this.studentList.execute({
      page,
      per_page,
      registration,
      username,
    });

    return {
      current_page,
      per_page,
      total,
      students: students.map(StudentViewModels.toHttp),
    };
  }
}
