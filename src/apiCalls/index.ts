import axiosClient from "../config/axios";

type IEmployeeType = {
  _id: string;
  name: string;
  birthDate: string;
  gender: string;
  salary: string;
};

export async function getAllEmployeesDB() {
  return await axiosClient.get("/employees");
}

export async function getEmployeeByIdDB(id: string) {
  return await axiosClient.post(`/employees/${id}`);
}

export async function createEmployeeDB(employee: IEmployeeType) {
  return await axiosClient.post("/employees", employee);
}

export async function deleteEmployeeDB(id: string) {
  return await axiosClient.delete(`/employees/${id}`);
}

export async function updateEmployeeDB(employee: IEmployeeType) {
  return await axiosClient.put(`/employees/${employee._id}`, employee);
}
