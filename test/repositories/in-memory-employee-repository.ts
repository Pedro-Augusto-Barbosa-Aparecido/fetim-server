import { Employee } from "src/applications/entities/employee";
import { EmployeeRepository } from "src/applications/repositories/employee-repository";

export class InMemoryDatabaseEmployee implements EmployeeRepository {
  public employees: Employee[] = [];
}
