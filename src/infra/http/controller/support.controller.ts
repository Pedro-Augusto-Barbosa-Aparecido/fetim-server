import { SupportCreate } from "@applications/useCases/SupportCreateUseCase";
import { Body, Controller, Post } from "@nestjs/common";
import { CreateSupportBody } from "../dtos/support-create-body-dto";
import { SupportViewModel } from "../view-models/support-view-models";

@Controller("support")
export class SupportController {
  constructor(private supportCreate: SupportCreate) {}

  @Post()
  async create(@Body() body: CreateSupportBody) {
    const { message, requester } = body;

    const { support } = await this.supportCreate.execute({
      message,
      requester,
    });

    return {
      support: SupportViewModel.toHttp(support),
    };
  }
}
