import { MailerService } from "@nestjs-modules/mailer";
import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";
import { SupportConsumerDTO } from "../dtos/support-consumer-dto";

@Controller()
export class SupportController {
  constructor(private mailer: MailerService) {}
  @EventPattern("support.send-support")
  async handleNewSupport(@Payload() content: SupportConsumerDTO) {
    this.mailer.sendMail({
      to: "pedr.augustobarbosa.aparecido@gmail.com",
      from: "Support App <pedr.augustobarbosa.aparecido@gmail.com>",
      subject: `New Support Requested by ${content.requester}`,
      text: `
        Support requested by ${content.requester}!

        Problem:

        ${content.message}
      `,
    });
  }
}
