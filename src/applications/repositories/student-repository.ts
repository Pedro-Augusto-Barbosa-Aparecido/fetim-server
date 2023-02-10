import { Student } from "@applications/entities/Student";

export abstract class StudentRepository {
  abstract create(student: Student): Promise<Student>;
}
