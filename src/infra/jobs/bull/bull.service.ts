import { Injectable } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bull";
import { Queue } from "bull";
import { CreateSupportDTO } from "../dtos/support-create-dto";

@Injectable()
export class BullService {
  constructor(@InjectQueue("register-mail-queue") private queue: Queue) {}

  async sendMailToSupportTeam({ message, requester }: CreateSupportDTO) {
    await this.queue.add("register-mail-job", { message, requester });
  }
}
