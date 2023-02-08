import { DatabaseModule } from "@infra/database/database.module";
import { HttpModule } from "@infra/http/http.module";
import { JobsModule } from "@infra/jobs/jobs.module";
import { MessagingModule } from "@infra/messaging/messaging.module";

import { Module } from "@nestjs/common";
@Module({
  imports: [HttpModule, DatabaseModule, MessagingModule, JobsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
