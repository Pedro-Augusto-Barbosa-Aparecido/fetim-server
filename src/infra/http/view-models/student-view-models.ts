import { Student } from "@applications/entities/Student";

export class StudentViewModels {
  static toHttp(student: Student) {
    return {
      id: student.domain_id,
      registration: student.registration,
      username: student.username,
      email: student.email,
      avatar: student.avatarUrl,
    };
  }
}
