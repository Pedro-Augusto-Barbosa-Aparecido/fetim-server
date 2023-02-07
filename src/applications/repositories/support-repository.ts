import { Support } from "@applications/entities/Support";

export abstract class SupportRepository {
  abstract create(support: Support): Promise<void>;
}
