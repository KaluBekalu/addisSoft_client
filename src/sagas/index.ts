import { put, takeEvery, all, call } from "redux-saga/effects";
import {
  ADD_EMPLOYEE,
  BEGIN_EMPLOYEES_DOWNLOAD,
  RETRIEVE_EMPLOYEE_DELETE,
  BEGIN_EDIT_EMPLOYEE,
} from "../types";

import {
  downloadEmployeesOkAction,
  downloadEmployeesErrorAction,
  addEmployeeOkAction,
  addEmployeeErrorAction,
  deleteEmployeeOkAction,
  deleteEmployeeErrorAction,
  updateEmployeeOkAction,
  updateEmployeeErrorAction,
} from "../actions";

import {
  getAllEmployeesDB,
  createEmployeeDB,
  deleteEmployeeDB,
  updateEmployeeDB,
} from "../apiCalls";

// Retrieve Employees
// worker saga
function* retrieveEmployees() {
  try {
    const { data } = yield call(getAllEmployeesDB);
    yield downloadEmployeesOkAction(data.data);
  } catch (error) {
    yield put(downloadEmployeesErrorAction());
  }
}

// watcher saga
function* getAllEmployees() {
  yield takeEvery(BEGIN_EMPLOYEES_DOWNLOAD, retrieveEmployees);
}

// Create new employee
// worker saga
function* addEmployee(action: any) {
  const employee = action.employee;
  try {
    yield call(createEmployeeDB, employee);
    /* const response = await axiosClient.post('/Employees', employee)*/
    yield addEmployeeOkAction(); // download actualized Employees
  } catch (error) {
    yield addEmployeeErrorAction(true);
  }
}

// watcher saga
function* addEmployeeSaga() {
  yield takeEvery(ADD_EMPLOYEE, addEmployee);
}

// Delete employee
// worker saga
function* deleteEmployee(action: any) {
  const id = action.payload;
  try {
    yield call(deleteEmployeeDB, id);
    yield deleteEmployeeOkAction();
    console.log("The employee has been deleted.");
  } catch (error) {
    yield deleteEmployeeErrorAction();
  }
}

// watcher saga
function* deleteEmployeeSaga() {
  yield takeEvery(RETRIEVE_EMPLOYEE_DELETE, deleteEmployee);
}

// update employee
// worker saga
function* updateEmployee(action: any) {
  const employee = action.employee;
  try {
    yield call(updateEmployeeDB, employee);
    yield updateEmployeeOkAction(employee);
    // Alert
    console.log("The employee has been updated.");
  } catch (error) {
    yield updateEmployeeErrorAction();
  }
}

// watcher saga
function* updateEmployeeSaga() {
  yield takeEvery(BEGIN_EDIT_EMPLOYEE, updateEmployee);
}

// Export all sagas
export default function* rootSaga() {
  yield all([
    getAllEmployees(),
    addEmployeeSaga(),
    deleteEmployeeSaga(),
    updateEmployeeSaga(),
  ]);
}
