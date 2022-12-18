import { randomUUID } from "node:crypto";

export class BaseEntity {
  private _id: string;

  constructor(id?: string) {
    this._id = id ?? randomUUID();
  }
}