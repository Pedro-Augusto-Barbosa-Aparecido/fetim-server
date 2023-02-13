import { Student } from "@applications/entities/Student";
import { Injectable } from "@nestjs/common";
import { FirebaseService } from "../firebase.service";
import { FirebaseStudentMapper } from "../mappers/friebase-student-mapper";

@Injectable()
export class FirebaseStudentRepository {
  constructor(private firebase: FirebaseService) {}

  async create(student: Student) {
    const userOnFirebase = await this.firebase.createUserWithEmailAndPassword(
      student.email,
      student.password
    );

    return FirebaseStudentMapper.toDomain({
      ...userOnFirebase,
      displayName: student.username ?? "",
      photoURL: student.avatarUrl ?? "",
    });
  }
}
