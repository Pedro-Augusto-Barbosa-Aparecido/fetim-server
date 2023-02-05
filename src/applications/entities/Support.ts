import { BaseEntity } from "./base";

interface SupportProps {
  message: string;
  requester: string;
  createdAt?: Date;
  active?: boolean;
}

export class Support extends BaseEntity {
  private props: SupportProps;

  constructor(props: SupportProps, id?: string) {
    super(id);

    this.props = props;
  }

  public get message() {
    return this.props.message;
  }

  public get requester() {
    return this.props.requester;
  }

  public get createdAt() {
    return this.props.createdAt;
  }

  public get active() {
    return this.props.active;
  }
}
