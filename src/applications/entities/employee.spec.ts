import { Email } from "./email";
import { Employee } from "./employee";
import { PhoneNumber } from "./phone-number";

describe("Employee Test", () => {
  it("should be able create employee", () => {
    const employee = new Employee({
      email: new Email("example-email@example.example"),
      name: "Employee 1",
      phoneNumber: new PhoneNumber("999999999"),
      updateAt: new Date(),
      createdAt: new Date(),
    });

    expect(employee).toBeTruthy();
  });
});
