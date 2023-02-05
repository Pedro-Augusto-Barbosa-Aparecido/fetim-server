import { Support } from "@applications/entities/Support";
import { Support as RawSupport } from "@prisma/client";

export class PrismaSupportMapper {
  static toPrisma(support: Support) {
    return {
      id: support.id,
      active: support.active,
      createAt: support.createdAt,
      requester: support.requester,
      message: support.message,
    };
  }

  static toDomain(raw: RawSupport) {
    return new Support(
      {
        message: raw.message,
        requester: raw.requester,
        active: raw.active,
        createdAt: raw.createdAt,
      },
      raw.id
    );
  }
}
