import { SupportCreate } from "@applications/useCases/SupportCreateUseCase";
import { DatabaseModule } from "@infra/database/database.module";
import { SendMailConsumerService } from "@infra/jobs/mail/send-mail-consumer.service";
// import { JobsModule } from "@infra/jobs/jobs.module";
import { SendMailProducerService } from "@infra/jobs/mail/send-mail-producer.service";
import { MailerModule } from "@nestjs-modules/mailer";
import { BullModule } from "@nestjs/bull";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SupportController } from "./controller/support.controller";

@Module({
  imports: [
    ConfigModule.forRoot(),
    BullModule.forRoot({
      redis: {
        host: "us1-trusted-bird-37911.upstash.io",
        port: 37911,
        password: "05e2cb6ad961405dbe68dbed1728ce71",
      },
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.MAIL_HOST,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      },
    }),
    BullModule.registerQueue({
      name: "send-mail-queue",
    }),
    DatabaseModule,
  ],
  controllers: [SupportController],
  providers: [SupportCreate, SendMailProducerService, SendMailConsumerService],
})
export class HttpModule {}
