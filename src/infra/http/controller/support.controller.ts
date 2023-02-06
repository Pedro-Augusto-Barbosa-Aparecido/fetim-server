import { SupportCreate } from "@applications/useCases/SupportCreateUseCase";
import { MailerService } from "@nestjs-modules/mailer/dist";
import { Body, Controller, Post } from "@nestjs/common";
import { CreateSupportBody } from "../dtos/support-create-body-dto";
import { SupportViewModel } from "../view-models/support-view-models";

@Controller("support")
export class SupportController {
  constructor(
    private supportCreate: SupportCreate,
    private mailer: MailerService
  ) {}

  @Post()
  async create(@Body() body: CreateSupportBody) {
    const { message, requester } = body;

    const { support } = await this.supportCreate.execute({
      message,
      requester,
    });

    await this.mailer.sendMail({
      to: "pedr.augustobarbosa.aparecido@gmail.com",
      from: "Fetim Stapp <pedro007augustobarbosa@gmail.com>",
      subject: "Novo suporte requisitado",
      text: `Òlá, tem um novo suporte para resolver!\n\n\n${message}\n\n\n\nRequester: ${requester}`,
    });

    return {
      support: SupportViewModel.toHttp(support),
    };
  }
}
