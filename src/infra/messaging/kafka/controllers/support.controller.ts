import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";
import { SupportConsumerDTO } from "../dtos/support-consumer-dto";

@Controller()
export class SupportController {
  @EventPattern("support.send-support")
  async handleNewSupport(@Payload() content: SupportConsumerDTO) {
    console.log(content);
  }
}
