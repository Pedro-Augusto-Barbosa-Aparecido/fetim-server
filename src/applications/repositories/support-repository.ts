import { Support } from "@applications/entities/Support";

export abstract class SupportRepository {
  abstract create(employee: Support): Promise<void>;
}
