import { Student } from "@applications/entities/Student";
import { StudentRepository } from "@applications/repositories/student-repository";
import { Injectable } from "@nestjs/common";

interface StudentListRequest {
  page: number;
  per_page: number;
  registration?: number;
  username?: string;
}

@Injectable()
export class StudentListUseCase {
  constructor(private studentRepository: StudentRepository) {}

  async execute(request: StudentListRequest) {
    const { page, per_page, registration, username } = request;

    const { count, students } = await this.studentRepository.listAll({
      page,
      per_page,
      registration: registration,
      username,
    });

    return {
      students,
      per_page,
      current_page: page,
      total: count,
    };
  }
}
