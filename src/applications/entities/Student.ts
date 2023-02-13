import { BaseEntity } from "./base";

interface StudentProps {
  displayName?: string;
  email: string;
  registration?: number;
  password?: string;
  photoUrl?: string;
  tenantId?: string;
  uid?: string;
  domain_id?: string;
}

export class Student extends BaseEntity {
  private props: StudentProps;

  constructor(props: StudentProps) {
    super(props.uid);

    this.props = props;
  }

  public get username() {
    return this.props.displayName;
  }

  public get email() {
    return this.props.email;
  }

  public get avatarUrl() {
    return this.props.photoUrl;
  }

  public get tenantId() {
    return this.props.tenantId;
  }

  public get uid() {
    return this.props.uid;
  }

  public get password() {
    return this.props.password ?? "";
  }

  public get registration() {
    return this.props.registration;
  }

  public get domain_id() {
    return this.props.domain_id;
  }
}
