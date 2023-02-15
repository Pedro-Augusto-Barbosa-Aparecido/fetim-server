import { Student } from "@applications/entities/Student";

export interface StudentList {
  students: Student[];
  per_page: number;
  page: number;
  count: number;
}

export class StudentGetByRegistrationParams {
  registration: number;
}

export interface StudentListParams {
  per_page: number;
  page: number;
  username?: string;
  registration?: number;
}

export abstract class StudentRepository {
  abstract create(student: Student): Promise<Student>;
  abstract listAll(params: StudentListParams): Promise<StudentList>;
  abstract getStudentByRegistration(
    params: StudentGetByRegistrationParams
  ): Promise<Student>;
}
