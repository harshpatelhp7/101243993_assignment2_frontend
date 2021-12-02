import React, { useState } from "react";

export default function AddEmployee() {
  const [employee, setEmployee] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    emailId: "",
  });

  return (
    <div>
      <h1 className="header">Employee Management App</h1>
    </div>
  );
}
