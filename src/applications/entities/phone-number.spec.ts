import { PhoneNumber } from "./phone-number";

describe("Phone-Number Type", () => {
  it("should be able create a phone-number", () => {
    const phoneNumber = new PhoneNumber("999999999");

    expect(phoneNumber).toBeTruthy();
  });

  it("should not be able create a e-mail with less than 10 characters", () => {
    expect(() => new PhoneNumber("9921")).toThrow();
  });

  it("should not be able create a e-mail with more than 18 characters", () => {
    expect(() => new PhoneNumber("3".repeat(19))).toThrow();
  });

  it("should not be able create invalid phone-number", () => {
    expect(() => new PhoneNumber("99999-9999d")).toThrow();
  });
});
