import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import EmployeeService from "../Services/EmployeeService";

export default function CreateEmployee() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailID] = useState("");

  const changeFirstNameHandler = (e) => {
    setFirstName(e.target.value);
  };

  const changeLastNameHandler = (e) => {
    setLastName(e.target.value);
  };

  const changeEmailIdHandler = (e) => {
    setEmailID(e.target.value);
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    try {
      let employee = {
        firstName: firstName,
        lastName: lastName,
        emailId: emailId,
      };

      EmployeeService.addEmployee(employee).then((res) => {
        navigate("/employees");
      });
    } catch (err) {
      console.log(err);
    }
  };

  const cancel = () => {
    navigate("/employees");
  };

  return (
    <div>
      <article className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Add Employee</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={changeFirstNameHandler}
                  ></input>

                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={changeLastNameHandler}
                  ></input>

                  <input
                    placeholder="Email-Address"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={changeEmailIdHandler}
                  ></input>
                </div>

                <button
                  className="btn btn-success"
                  type="submit"
                  onClick={saveEmployee}
                >
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  type="submit"
                  onClick={cancel}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
