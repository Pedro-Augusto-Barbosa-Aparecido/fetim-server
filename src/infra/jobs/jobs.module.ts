import { KafkaProducerService } from "@infra/messaging/kafka/kafka-producer.service";
import { BullModule } from "@nestjs/bull";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { BullService } from "./bull/bull.service";
import { RegisterMailQueueController } from "./controllers/send-mail-queue-consumer.controller";

@Module({
  imports: [
    ConfigModule.forRoot(),
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_ENDPOINT,
        port: Number(process.env.REDIS_PORT),
        password: process.env.REDIS_PASSWORD,
      },
    }),
    BullModule.registerQueue({ name: "register-mail-queue" }),
  ],
  providers: [BullService, KafkaProducerService, RegisterMailQueueController],
  controllers: [],
})
export class JobsModule {}
