import { CreateSupportBody } from "@infra/http/dtos/support-create-body-dto";
import { InjectQueue } from "@nestjs/bull";
import { Injectable } from "@nestjs/common";
import { Queue } from "bull";

@Injectable()
export class SendMailProducerService {
  constructor(@InjectQueue("send-mail-queue") private queue: Queue) {}

  async sendMail(createSupport: CreateSupportBody) {
    await this.queue.add("send-mail-job", createSupport, {
      attempts: 3,
    });
  }
}
