import { Student } from "@applications/entities/Student";
import { StudentRepository } from "@applications/repositories/student-repository";
import { Injectable } from "@nestjs/common";
import { FirebaseService } from "../firebase.service";

@Injectable()
export class FirebaseStudentRepository implements StudentRepository {
  constructor(private firebase: FirebaseService) {}

  async create(student: Student) {
    const userOnFirebase = await this.firebase.createUserWithEmailAndPassword(
      student.email,
      student.password
    );
  }
}
