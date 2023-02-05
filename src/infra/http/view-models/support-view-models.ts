import { Support } from "@applications/entities/Support";

export class SupportViewModel {
  static toHttp(support: Support) {
    return {
      id: support.id,
      active: support.active,
      requester: support.requester,
      message: support.message,
    };
  }
}
