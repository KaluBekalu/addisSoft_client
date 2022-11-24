import React, { useEffect, useState } from "react";
import { connect, useDispatch, useStore } from "react-redux";
import { deleteEmployeeAction, downloadEmployeesAction } from "../actions";
import { getAllEmployeesDB } from "../apiCalls";
import { Button } from "../components/Button";
import { Row, Table, TableData, TableHead } from "../components/Table";
import { H1 } from "../components/Typography";

import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import styled from "styled-components";
import { AddNewEmployee } from "../components/AddNewEmployee";
import {
  EditNewEmployee,
  IEmployeeEditType,
} from "../components/EditNewEmployee";
import { IStateType } from "../reducers";
import { Store } from "redux";

const IconContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Icon = styled.span`
  cursor: pointer;
  color: #0367b9;
  font-size: 20px;
  &:hover {
    color: #022949;
  }
`;

let Employees = ({}) => {
  const store: Store = useStore();
  const { employees, loading } = store.getState();
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editData, setEditData] = useState<IEmployeeEditType>({
    _id: "",
    name: "",
    birthDate: "",
    gender: "",
    salary: "",
  });

  useEffect(() => {
    (async () => await downloadEmployeesAction())();
  }, []);

  if (loading) return <div>loading...</div>;
  return employees && !loading ? (
    <div>
      {modalVisible ? (
        <AddNewEmployee setModalVisible={setModalVisible} />
      ) : null}
      {editModalVisible ? (
        <EditNewEmployee
          setEditModalVisible={setEditModalVisible}
          data={editData}
        />
      ) : null}

      <Table>
        <H1>Addis soft employees tracker</H1>
        <Button
          style={{ marginBottom: 15 }}
          onClick={() => setModalVisible(true)}
        >
          ADD
        </Button>
        <tbody>
          <Row>
            <TableHead>Id</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Birthdate</TableHead>
            <TableHead>Salary</TableHead>
            <TableHead>Actions</TableHead>
          </Row>
          {employees.map((i: any) => {
            return (
              <Row key={i._id}>
                <TableData>{i._id}</TableData>
                <TableData>{i.name}</TableData>
                <TableData>{i.gender}</TableData>
                <TableData>{new Date(i.birthDate).toDateString()}</TableData>
                <TableData>{i.salary}</TableData>
                <TableData>
                  <IconContainer>
                    <Icon onClick={() => deleteEmployeeAction(i._id)}>
                      <AiOutlineDelete />
                    </Icon>
                    <Icon
                      onClick={() => {
                        setEditData({
                          _id: i._id,
                          name: i.name,
                          gender: i.gender,
                          birthDate: i.birthDate,
                          salary: i.salary,
                        });
                        setEditModalVisible(true);
                      }}
                    >
                      <AiOutlineEdit />
                    </Icon>
                  </IconContainer>
                </TableData>
              </Row>
            );
          })}
        </tbody>
      </Table>
    </div>
  ) : null;
};

const mapStateToProps = (state: any) => ({
  employees: state.employees,
  loading: state.loading,
});

const mapDispatchToProps = {
  getEmployees: getAllEmployeesDB,
};

Employees = connect(mapStateToProps, mapDispatchToProps)(Employees);

export default Employees;
