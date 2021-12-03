import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";
import EmployeeService from "../Services/EmployeeService";

export default function UpdateEmployee() {
  const params = useParams();
  const navigate = useNavigate();
  const [id] = useState(params.id);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");

  const changeFirstNameHandler = (e) => {
    setFirstName(e.target.value);
  };

  const changeLastNameHandler = (e) => {
    setLastName(e.target.value);
  };

  const changeEmailIdHandler = (e) => {
    setEmailId(e.target.value);
  };

  useEffect(() => {
    try {
      EmployeeService.getEmployeeById(id).then((res) => {
        let employee = res.data.employee;
        setFirstName(employee.firstName);
        setLastName(employee.lastName);
        setEmailId(employee.emailId);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const updateEmployee = (e) => {
    e.preventDefault();

    let employee = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
    };

      try {
          EmployeeService.updateEmployeesById(id, employee).then(res => {
              navigate("/employees")
          })
      } catch (err) {
          console.log(err)
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
            <h3 className="text-center">Update Employee</h3>
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
                  onClick={updateEmployee}
                >
                  Update
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
