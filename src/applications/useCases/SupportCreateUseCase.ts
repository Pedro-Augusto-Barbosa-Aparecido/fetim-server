import { Support } from "@applications/entities/Support";
import { SupportRepository } from "@applications/repositories/support-repository";
import { Injectable } from "@nestjs/common";

interface SupportCreateRequest {
  requester: string;
  message: string;
}

interface SupportCreateResponse {
  support: Support;
}

@Injectable()
export class SupportCreate {
  constructor(private supportRepositories: SupportRepository) {}

  async execute(request: SupportCreateRequest): Promise<SupportCreateResponse> {
    const { message, requester } = request;

    const support = new Support({
      requester,
      message,
    });

    await this.supportRepositories.create(support);

    return {
      support,
    };
  }
}
