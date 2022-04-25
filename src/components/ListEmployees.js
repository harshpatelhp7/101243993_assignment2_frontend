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

  const updateEmployee = (id) => {
    navigate(`/updateEmployee/${id}`);
  };
  const deleteEmployee = (id) => {
    EmployeeService.deleteEmployeeById(id).then((res) => {
      setEmployees(employees.filter((employee) => employee._id !== id));
    });
  };
  const viewEmployee = (id) => {
    navigate(`/viewEmployee/${id}`);
  };

  return (
    <div className="listPage">
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
              <tr key={employee._id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td className="actions">
                  <button
                    className="updateBtn"
                    style={{ background: "#008a39" }}
                    type="button"
                    onClick={() => updateEmployee(employee._id)}
                  >
                    Update
                  </button>
                  <button
                    className="deleteBtn"
                    style={{ background: "#d10000" }}
                    type="button"
                    onClick={() => deleteEmployee(employee._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="viewBtn"
                    style={{ background: "#27c2ba" }}
                    type="button"
                    onClick={() => viewEmployee(employee._id)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <footer>
        <a
          href="https://github.com/harshpatelhp7/EmployeeManagement_Frontend"
          target="_blank"
          rel="noreferrer"
        >
          Click to browse Frontend Repo on Github
        </a>
        <br />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://employee-management-backend-hp.herokuapp.com"
        >
          Click to browse Backend Live Server
        </a>
      </footer>
    </div>
  );
}
