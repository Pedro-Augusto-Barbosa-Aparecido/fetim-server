import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";

import { SupportRepository } from "@applications/repositories/support-repository";
import { PrismaSupportRepositories } from "./prisma/repositories/prisma-support-repository";

@Module({
  providers: [
    PrismaService,
    { provide: SupportRepository, useClass: PrismaSupportRepositories },
  ],
  exports: [SupportRepository],
})
export class DatabaseModule {}
