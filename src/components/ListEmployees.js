import React, { useState, useEffect } from "react";
import AddEmployee from "./AddEmployee";
import EmployeeService from "../Services/EmployeeService";
import "../App.css";

export default function ListEmployees() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = () => {
    <AddEmployee />;
  };

  useEffect(() => {
    EmployeeService.getEmployees().then((res) => {
      console.log(res.data.employees);
      setEmployees(res.data.employees);
    });
  }, []);

  return (
    <div>
      <h1 className="header">Employee Management App</h1>
      <button type="button" className="btn" onClick={() => addEmployee()}>
        Add Employee
      </button>

      <section className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email-Id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
