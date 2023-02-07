import { Student } from "@applications/entities/Student";
import { User } from "firebase/auth";

export class FirebaseStudentMapper {
  static toDomain(student: User) {
    return new Student({
      uid: student.uid,
      email: student.email ?? "",
      displayName: student.displayName ?? "",
      password: "",
      photoUrl: student.photoURL ?? "",
      tenantId: student.tenantId ?? "",
    });
  }
}
