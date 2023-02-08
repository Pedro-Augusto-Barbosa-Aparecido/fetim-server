// import { MailerModule } from "@nestjs-modules/mailer";
import { MailerModule } from "@nestjs-modules/mailer";
import { Module } from "@nestjs/common";
// import { ConfigModule } from "@nestjs/config";
import { SupportController } from "./kafka/controllers/support.controller";
import { KafkaConsumerService } from "./kafka/kafka-consumer.service";
import { KafkaProducerService } from "./kafka/kafka-producer.service";

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT),
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      },
    }),
  ],
  providers: [KafkaConsumerService, KafkaProducerService],
  controllers: [SupportController],
})
export class MessagingModule {}
