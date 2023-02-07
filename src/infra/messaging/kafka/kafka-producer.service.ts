import { OnModuleDestroy } from "@nestjs/common";
import { Injectable } from "@nestjs/common/decorators";
import { OnModuleInit } from "@nestjs/common/interfaces";

import { Kafka, Producer } from "kafkajs";

@Injectable()
export class KafkaProducerService implements OnModuleDestroy, OnModuleInit {
  private readonly kafka = new Kafka({
    brokers: ["direct-tapir-14463-us1-kafka.upstash.io:9092"],
    sasl: {
      mechanism: "scram-sha-256",
      username:
        "ZGlyZWN0LXRhcGlyLTE0NDYzJDbfcN9OzrddjVESPWh6yEBqOPZ-E66aTvfTn5M",
      password: "e314817b49614857a5b689bdd435571d",
    },
    ssl: true,
  });

  private producer: Producer;

  async onModuleInit() {
    // this.subscribeToResponseOf("support.send-support");
    this.producer = this.kafka.producer();
    await this.producer.connect();
  }

  async onModuleDestroy() {
    await this.producer?.disconnect();
  }

  public get producerService() {
    return this.producer;
  }
}
