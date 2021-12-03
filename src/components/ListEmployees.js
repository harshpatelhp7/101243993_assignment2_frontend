import React, { useState, useEffect } from "react";
import EmployeeService from "../Services/EmployeeService";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function ListEmployees() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    EmployeeService.getEmployees().then((res) => {
      console.log(res.data.employees);
      setEmployees(res.data.employees);
    });
  }, []);

  const addEmployee = () => {
    navigate("/addEmployee");
  };

  return (
    <div>
      <button type="button" className="mybtn" onClick={addEmployee}>
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
                <td>
                  <button type="button"wor>Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
