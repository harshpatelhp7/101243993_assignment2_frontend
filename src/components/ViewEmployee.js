import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import EmployeeService from "../Services/EmployeeService";
import "../App.css";

export default function ViewEmployee() {
  const params = useParams();
  const [id] = useState(params.id);
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    try {
      EmployeeService.getEmployeeById(id).then((res) => {
        let employee = res.data.employee;
        setEmployee(employee);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      <h1 className="detailsHeader">View Employee Details</h1>
      <section className="detailsContainer">
        <div className="details">
          {employee.firstName}
          {"\n"}
        </div>

        <div className="details">
          {"\n"}
          {employee.lastName}
        </div>

        <div className="details">{employee.emailId}</div>
      </section>
    </div>
  );
}
