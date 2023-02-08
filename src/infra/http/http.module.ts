import { SupportCreate } from "@applications/useCases/SupportCreateUseCase";
import { DatabaseModule } from "@infra/database/database.module";
import { BullService } from "@infra/jobs/bull/bull.service";
import { KafkaProducerService } from "@infra/messaging/kafka/kafka-producer.service";
import { BullModule } from "@nestjs/bull";

import { Module } from "@nestjs/common";
import { SupportController } from "./controller/support.controller";

@Module({
  imports: [
    DatabaseModule,
    BullModule.registerQueue({ name: "register-mail-queue" }),
  ],
  controllers: [SupportController],
  providers: [SupportCreate, KafkaProducerService, BullService],
})
export class HttpModule {}
