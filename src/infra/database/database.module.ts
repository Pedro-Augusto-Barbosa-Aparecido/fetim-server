import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";

import { SupportRepository } from "@applications/repositories/support-repository";
import { PrismaSupportRepositories } from "./prisma/repositories/prisma-support-repository";
import { FirebaseService } from "./firebase/firebase.service";

@Module({
  providers: [
    PrismaService,
    FirebaseService,
    { provide: SupportRepository, useClass: PrismaSupportRepositories },
    // { provide: StudentRepository, useClass: FirebaseStudentRepository },
  ],
  exports: [SupportRepository],
})
export class DatabaseModule {}
