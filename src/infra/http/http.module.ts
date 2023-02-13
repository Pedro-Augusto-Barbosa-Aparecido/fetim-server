import { SupportCreate } from "@applications/useCases/SupportCreateUseCase";
import { DatabaseModule } from "@infra/database/database.module";
import { FirebaseService } from "@infra/database/firebase/firebase.service";
import { PrismaService } from "@infra/database/prisma/prisma.service";
import { FirebaseStudentRepository } from "@infra/database/firebase/repositories/firebase-student-repository";
import { PrismaStudentRepository } from "@infra/database/prisma/repositories/prisma-student-repository";
import { BullService } from "@infra/jobs/bull/bull.service";
import { KafkaProducerService } from "@infra/messaging/kafka/kafka-producer.service";
import { BullModule } from "@nestjs/bull";

import { Module } from "@nestjs/common";
import { StudentController } from "./controller/student.controller";
import { SupportController } from "./controller/support.controller";
import { StudentListUseCase } from "@applications/useCases/Student/StudentListUseCase";
import { StudentRepository } from "@applications/repositories/student-repository";

@Module({
  imports: [
    DatabaseModule,
    BullModule.registerQueue({ name: "register-mail-queue" }),
  ],
  controllers: [SupportController, StudentController],
  providers: [
    SupportCreate,
    KafkaProducerService,
    BullService,
    PrismaService,
    FirebaseService,
    PrismaStudentRepository,
    FirebaseStudentRepository,
    StudentListUseCase,
  ],
})
export class HttpModule {}
