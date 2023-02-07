import { SupportCreate } from "@applications/useCases/SupportCreateUseCase";
import { KafkaProducerService } from "@infra/messaging/kafka/kafka-producer.service";

import { Body, Controller, Post } from "@nestjs/common";
import { CreateSupportBody } from "../dtos/support-create-body-dto";
import { SupportViewModel } from "../view-models/support-view-models";

@Controller("support")
export class SupportController {
  constructor(
    private supportCreate: SupportCreate,
    private kafka: KafkaProducerService
  ) {}

  @Post()
  async create(@Body() body: CreateSupportBody) {
    const { message, requester } = body;

    const { support } = await this.supportCreate.execute({
      message,
      requester,
    });

    await this.kafka.producerService.send({
      topic: "support.send-support",
      messages: [
        {
          value: JSON.stringify(SupportViewModel.toHttp(support)),
        },
      ],
    });

    return {
      support: SupportViewModel.toHttp(support),
    };
  }
}
