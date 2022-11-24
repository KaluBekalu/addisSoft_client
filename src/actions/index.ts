import store from "../store";
import {
  ADD_EMPLOYEE,
  ADD_EMPLOYEE_ERROR,
  BEGIN_EMPLOYEES_DOWNLOAD,
  EMPLOYEES_DOWNLOAD_OK,
  EMPLOYEES_DOWNLOAD_ERROR,
  RETRIEVE_EMPLOYEE_DELETE,
  EMPLOYEE_DELETED_OK,
  EMPLOYEE_DELETED_ERROR,
  RETRIEVE_EMPLOYEE_EDIT,
  BEGIN_EDIT_EMPLOYEE,
  EMPLOYEE_EDITED_OK,
  EMPLOYEE_EDITED_ERROR,
} from "../types";

// Download employees actions
const downloadEmployees = () => ({
  type: BEGIN_EMPLOYEES_DOWNLOAD,
  payload: true,
});

const downloadEmployeesOk = (employees: any) => ({
  type: EMPLOYEES_DOWNLOAD_OK,
  payload: employees,
});

const downloadEmployeesError = () => ({
  type: EMPLOYEES_DOWNLOAD_ERROR,
  payload: true,
});

export const downloadEmployeesAction = () =>
  store.dispatch(downloadEmployees());

export const downloadEmployeesOkAction = (employees: any) =>
  store.dispatch(downloadEmployeesOk(employees));

export const downloadEmployeesErrorAction = () =>
  store.dispatch(downloadEmployeesError());

// Create new employees
const addEmployee = (employee: any) => ({
  type: ADD_EMPLOYEE,
  payload: true,
  employee: employee,
});

const addEmployeeOk = () => ({
  type: BEGIN_EMPLOYEES_DOWNLOAD,
  payload: true,
});

const addEmployeeError = (state: any) => ({
  type: ADD_EMPLOYEE_ERROR,
  payload: state,
});

export const addEmployeeAction = (employee: any) =>
  store.dispatch(addEmployee(employee));

export const addEmployeeOkAction = () => store.dispatch(addEmployeeOk());

export const addEmployeeErrorAction = (state: any) =>
  store.dispatch(addEmployeeError(state));

// Delete employees
const retrieveEmployeeDelete = (id: string) => ({
  type: RETRIEVE_EMPLOYEE_DELETE,
  payload: id,
});

const deleteEmployeeOk = () => ({
  type: EMPLOYEE_DELETED_OK,
});

const deleteEmployeeError = () => ({
  type: EMPLOYEE_DELETED_ERROR,
  payload: true,
});

export const deleteEmployeeAction = (id: string) =>
  store.dispatch(retrieveEmployeeDelete(id));

export const deleteEmployeeOkAction = () => store.dispatch(deleteEmployeeOk());

export const deleteEmployeeErrorAction = () =>
  store.dispatch(deleteEmployeeError());

// Edit employee
const retrieveEmployeeAction = (employee: any) => ({
  type: RETRIEVE_EMPLOYEE_EDIT,
  payload: employee,
});

const updateEmployee = (employee: any) => ({
  type: BEGIN_EDIT_EMPLOYEE,
  employee: employee,
});

const updateEmployeeOk = (employee: any) => ({
  type: EMPLOYEE_EDITED_OK,
  payload: employee,
});

const updateEmployeeError = () => ({
  type: EMPLOYEE_EDITED_ERROR,
  payload: true,
});

export const retrieveEmployeeEditAction = (employee: any) =>
  store.dispatch(retrieveEmployeeAction(employee));

export const updateEmployeeAction = (employee: any) =>
  store.dispatch(updateEmployee(employee));

export const updateEmployeeOkAction = (employee: any) =>
  store.dispatch(updateEmployeeOk(employee));

export const updateEmployeeErrorAction = () =>
  store.dispatch(updateEmployeeError());
