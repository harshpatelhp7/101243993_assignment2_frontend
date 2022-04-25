import axios from "axios";

const EMPLOYEE_BASEURL =
  "https://employee-management-backend-hp.herokuapp.com/api/v1/employees";

class EmployeeService {
  getEmployees() {
    return axios.get(EMPLOYEE_BASEURL);
  }

  addEmployee(employee) {
    return axios.post(EMPLOYEE_BASEURL, employee);
  }

  getEmployeeById(id) {
    return axios.get(EMPLOYEE_BASEURL + "/" + id);
  }

  updateEmployeesById(id, employee) {
    return axios.put(EMPLOYEE_BASEURL + "/" + id, employee);
  }

  deleteEmployeeById(id) {
    return axios.delete(EMPLOYEE_BASEURL + "/" + id);
  }
}

export default new EmployeeService();
