import { Employee } from "@applications/entities/employee";

export abstract class EmployeeRepository {
  abstract create(employee: Employee): Promise<void>;
}
