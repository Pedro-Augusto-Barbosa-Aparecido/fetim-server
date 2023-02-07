import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";

import { SupportRepository } from "@applications/repositories/support-repository";
import { PrismaSupportRepositories } from "./prisma/repositories/prisma-support-repository";
import { FirebaseService } from "./firebase/firebase.service";
import { StudentRepository } from "@applications/repositories/student-repository";
import { FirebaseStudentRepository } from "./firebase/repositories/firebase-student-repository";

@Module({
  providers: [
    PrismaService,
    FirebaseService,
    { provide: SupportRepository, useClass: PrismaSupportRepositories },
    { provide: StudentRepository, useClass: FirebaseStudentRepository },
  ],
  exports: [SupportRepository],
})
export class DatabaseModule {}
