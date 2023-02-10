import { Student } from "@applications/entities/Student";
import { StudentRepository } from "@applications/repositories/student-repository";
import { Injectable } from "@nestjs/common";

interface StudentCreateRequest {
  firebase_id: string;
  email: string;
  photo_url: string;
  tenant_id: string;
  username: string;
}

@Injectable()
export class StudentCreate {
  constructor(private studentRepository: StudentRepository) {}

  async execute(request: StudentCreateRequest) {
    const { email, firebase_id, photo_url, tenant_id, username } = request;

    const student = new Student({
      email: email,
      displayName: username,
      photoUrl: photo_url,
      tenantId: tenant_id,
      uid: firebase_id,
    });

    await this.studentRepository.create(student);
  }
}
