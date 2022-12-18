import { BaseEntity } from "./base";
import { Email } from "./email";
import { PhoneNumber } from "./phone-number";

export interface EmployeeProps {
  name: string;
  email: Email;
  phoneNumber: PhoneNumber;
  createdAt: Date;
  updateAt: Date;
}

export class Employee extends BaseEntity {
  private props: EmployeeProps;
  constructor(props: EmployeeProps, id?: string) {
    super(id);

    this.props = props;
  }

  public get name(): string {
    return this.props.name;
  }

  public get email(): Email {
    return this.props.email;
  }

  public get phoneNumber(): PhoneNumber {
    return this.props.phoneNumber;
  }

  public get updatedAt(): Date {
    return this.props.updateAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
