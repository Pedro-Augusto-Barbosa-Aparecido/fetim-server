import { Injectable } from "@nestjs/common";
import { StudentRepository } from "../../repositories/student-repository";

interface StudentGetByRegistrationParams {
  registration: number;
}

@Injectable()
export class StudentGetByRegistration {
  constructor(private studentRepository: StudentRepository) {}

  async execute(params: StudentGetByRegistrationParams) {
    const { registration } = params;

    const student = await this.studentRepository.getStudentByRegistration({
      registration,
    });

    return student;
  }
}
