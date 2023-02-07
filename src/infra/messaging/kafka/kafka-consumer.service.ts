import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: "send-mail-support",
        brokers: ["direct-tapir-14463-us1-kafka.upstash.io:9092"],
        sasl: {
          mechanism: "scram-sha-256",
          username:
            "ZGlyZWN0LXRhcGlyLTE0NDYzJDbfcN9OzrddjVESPWh6yEBqOPZ-E66aTvfTn5M",
          password: "e314817b49614857a5b689bdd435571d",
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
