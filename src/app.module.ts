import { DatabaseModule } from "@infra/database/database.module";
import { HttpModule } from "@infra/http/http.module";
import { MailerModule } from "@nestjs-modules/mailer";
import { BullModule } from "@nestjs/bull";

import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
@Module({
  imports: [
    ConfigModule.forRoot(),
    BullModule.forRoot({
      redis: {
        host: "localhost",
        port: 32768,
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
    HttpModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
