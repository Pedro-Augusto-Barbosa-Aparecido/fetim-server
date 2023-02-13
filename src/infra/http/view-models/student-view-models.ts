import { Student } from "@applications/entities/Student";

export class StudentViewModels {
  static toHttp(student: Student) {
    return {
      id: student.id,
      username: student.username,
      email: student.email,
      avatar: student.avatarUrl,
    };
  }
}
