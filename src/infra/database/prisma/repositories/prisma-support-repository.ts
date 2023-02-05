import { Support } from "@applications/entities/Support";
import { SupportRepository } from "@applications/repositories/support-repository";
import { Injectable } from "@nestjs/common";
import { PrismaSupportMapper } from "../mappers/prisma-support-mapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaSupportRepositories implements SupportRepository {
  constructor(private prisma: PrismaService) {}

  async create(support: Support): Promise<void> {
    const raw = PrismaSupportMapper.toPrisma(support);

    await this.prisma.support.create({
      data: raw,
    });
  }
}
