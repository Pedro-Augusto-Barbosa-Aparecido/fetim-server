import { SupportCreate } from "@applications/useCases/SupportCreateUseCase";
import { SendMailProducerService } from "@infra/jobs/mail/send-mail-producer.service";
import { MailerService } from "@nestjs-modules/mailer";

import { Body, Controller, Post } from "@nestjs/common";
import { CreateSupportBody } from "../dtos/support-create-body-dto";
import { SupportViewModel } from "../view-models/support-view-models";

@Controller("support")
export class SupportController {
  constructor(
    private supportCreate: SupportCreate,
    private serviceMail: SendMailProducerService,
    private mailer: MailerService
  ) {}

  @Post()
  async create(@Body() body: CreateSupportBody) {
    const { message, requester } = body;

    const { support } = await this.supportCreate.execute({
      message,
      requester,
    });

    this.serviceMail.sendMail({ message, requester });

    return {
      support: SupportViewModel.toHttp(support),
    };
  }
}
