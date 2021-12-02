import axios from "axios";

const EMPLOYEE_BASEURL = "http://localhost:3001/api/v1/employees";

class EmployeeService {
  getEmployees() {
    return axios.get(EMPLOYEE_BASEURL);
  }
}

export default new EmployeeService();
