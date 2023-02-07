import { CreateSupportBody } from "@infra/http/dtos/support-create-body-dto";
import { MailerService } from "@nestjs-modules/mailer";
import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";

@Processor("send-mail-queue")
export class SendMailConsumerService {
  constructor(private mailer: MailerService) {}

  @Process("send-mail-job")
  async sendMail(job: Job<CreateSupportBody>) {
    const {
      data: { message, requester },
    } = job;

    await this.mailer.sendMail({
      to: "pedr.augustobarbosa.aparecido@gmail.com",
      from: "Fetin App <pedr.augustobarbosa.aparecido@gmail.com>",
      subject: "Novo suporte requisitado",
      text: `Òlá, tem um novo suporte para resolver!\n\n\n${message}\n\n\n\nRequester: ${requester}`,
    });
  }
}
