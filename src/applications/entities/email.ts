export class Email {
  private email: string;
  constructor(email: string) {
    const isValidEmailLength = this.validateLengthEmail(email);
    const isValidEmailFormat = this.validateFormatEmail(email);

    if (!isValidEmailLength) {
      throw new Error("E-mail length is invalid!!");
    }

    if (!isValidEmailFormat) {
      throw new Error("Invalid e-mail!!");
    }

    this.email = email;
  }

  private validateLengthEmail(email: string) {
    return email.length >= 10 && email.length <= 200;
  }

  private validateFormatEmail(email: string) {
    const emailRegex = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    return emailRegex.test(email);
  }

  public get value(): string {
    return this.email;
  }
}
