import { Student } from "@applications/entities/Student";

export interface StudentList {
  students: Student[];
  per_page: number;
  page: number;
  count: number;
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
}
