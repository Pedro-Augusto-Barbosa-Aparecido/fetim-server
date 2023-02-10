import { Student } from "@applications/entities/Student";

export class StudentViewModels {
  static toHttp(student: Student) {
    console.log(student);

    return {
      username: student.username,
      email: student.email,
      avatar: student.avatarUrl,
    };
  }
}
