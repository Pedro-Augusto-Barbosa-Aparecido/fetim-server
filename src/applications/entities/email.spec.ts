import { Email } from "./email";

describe("E-mail Type", () => {
  it("should be able create a e-mail", () => {
    const email = new Email("example-email@example.com");

    expect(email).toBeTruthy();
  });

  it("should not be able create a e-mail with less than 10 characters", () => {
    expect(() => new Email("e@e.c")).toThrow();
  });

  it("should not be able create a e-mail with more than 200 characters", () => {
    expect(() => new Email(`${"e".repeat(201)}@gmail.com`)).toThrow();
  });

  it("should not be able create invalid e-mail", () => {
    expect(() => new Email("email@email")).toThrow();
    expect(() => new Email("@email.com")).toThrow();
  });
});
