import { DatabaseModule } from "@infra/database/database.module";
import { HttpModule } from "@infra/http/http.module";
import { MailerModule } from "@nestjs-modules/mailer";
import { BullModule } from "@nestjs/bull";

import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
@Module({
  imports: [HttpModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
