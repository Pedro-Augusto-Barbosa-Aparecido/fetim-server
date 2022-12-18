import { Email } from "@applications/entities/email";
import { Employee, EmployeeProps } from "@applications/entities/employee";
import { PhoneNumber } from "@applications/entities/phone-number";

type Override = Partial<EmployeeProps>;

export function makeEmployee(override: Override = {}) {
  return new Employee({
    email: new Email("example-email@email.com"),
    phoneNumber: new PhoneNumber("999999999"),
    createdAt: new Date(),
    updateAt: new Date(),
    name: "employee 1",
    ...override,
  });
}
