import { KafkaProducerService } from "@infra/messaging/kafka/kafka-producer.service";
// import { MailerService } from "@nestjs-modules/mailer";
import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
import { CreateSupportDTO } from "../dtos/support-create-dto";

@Processor("register-mail-queue")
export class RegisterMailQueueController {
  constructor(private kafka: KafkaProducerService) {}

  @Process("register-mail-job")
  async registerEmailOnKafka(job: Job<CreateSupportDTO>) {
    const { data } = job;
    const { message, requester } = data;

    await this.kafka.producerService.send({
      topic: "support.send-support",
      messages: [
        {
          value: JSON.stringify({ message, requester }),
        },
      ],
    });
  }
}
