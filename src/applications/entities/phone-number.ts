export class PhoneNumber {
  private phone: string;
  constructor(phoneNumber: string) {
    const isValidLengthPhoneNumber = this.validateLengthPhone(phoneNumber);

    if (isNaN(Number(phoneNumber))) {
      throw new Error("Invalid phone number!!");
    }

    if (!isValidLengthPhoneNumber) {
      throw new Error("Invalid length for phone number!!");
    }

    this.phone = phoneNumber;
  }

  private validateLengthPhone(phoneNumber: string) {
    return phoneNumber.length >= 9 && phoneNumber.length <= 18;
  }

  public get value(): string {
    return this.phone;
  }
}
