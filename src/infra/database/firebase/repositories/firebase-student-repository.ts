import { Student } from "@applications/entities/Student";
import { StudentRepository } from "@applications/repositories/student-repository";
import { Injectable } from "@nestjs/common";
import { FirebaseService } from "../firebase.service";
import { FirebaseStudentMapper } from "../mappers/friebase-student-mapper";

@Injectable()
export class FirebaseStudentRepository implements StudentRepository {
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
