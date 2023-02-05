import { SupportCreate } from "@applications/useCases/SupportCreateUseCase";
import { DatabaseModule } from "@infra/database/database.module";
import { Module } from "@nestjs/common";
import { SupportController } from "./controller/support.controller";

@Module({
  imports: [DatabaseModule],
  controllers: [SupportController],
  providers: [SupportCreate],
})
export class HttpModule {}
