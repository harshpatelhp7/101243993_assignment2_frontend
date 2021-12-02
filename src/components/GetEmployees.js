import React from "react";
import AddEmployee from "./AddEmployee";

export default function GetEmployees() {

    const addEmployee = () => {
    <AddEmployee/>
    }

  return (
    <div>
      <h1 className="header">Employee Management App</h1>
      <button type="button" className="btn" onClick={()=>addEmployee()}>
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
            <tr></tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
