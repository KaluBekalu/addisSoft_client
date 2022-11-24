import React, { FormEvent, useEffect, useState } from "react";
import { addEmployeeAction, updateEmployeeAction } from "../actions";
import { Button } from "./Button";
import { H1 } from "./Typography";
import { Modal } from "./Modal";
import { Input, Select, Option, Lable, FormGroup, Form } from "./Form";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Close } from "./Close";

export type IEmployeeEditType = {
  _id: string;
  name: string;
  birthDate: string;
  gender: string;
  salary: string;
};

export type IEditFormType = {
  setEditModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  data: IEmployeeEditType;
};

export const EditNewEmployee = ({
  setEditModalVisible,
  data,
}: IEditFormType) => {
  const [_id, setId] = useState(data._id);
  const [name, setName] = useState(data.name);
  const [gender, setGender] = useState(data.gender);
  const [birthDate, setBirthDate] = useState(data.birthDate);
  const [salary, setSalary] = useState(data.salary);

  const clearForm = () => {
    setName("");
    setSalary("");
    setBirthDate("");
  };

  const dateLoader = () => {
    setBirthDate(new Date(birthDate).toISOString().split("T")[0]); // yyyy-mm-dd
  };

  const handleAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let data = {
      _id,
      name,
      birthDate,
      gender,
      salary,
    };
    updateEmployeeAction(data);
    setEditModalVisible(false);
    clearForm();
  };

  useEffect(() => {
    console.log(birthDate);
    dateLoader();
  }, []);
  return (
    <Modal>
      <Form onSubmit={(e) => handleAdd(e)}>
        <Close onClick={() => setEditModalVisible(false)}>
          <AiOutlineCloseCircle />
        </Close>
        <H1 style={{ marginBottom: 10 }}>Edit Employee</H1>
        <FormGroup>
          <Lable>Full name</Lable>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Full name"
          />
        </FormGroup>
        <FormGroup>
          <Lable>Gender</Lable>
          <Select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            placeholder="Gender"
          >
            <Option>Male</Option>
            <Option>Female</Option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Lable>Birth date</Lable>
          <Input
            defaultValue={new Date().toDateString()}
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
            type="date"
            placeholder="Pick a birthdate"
          />
        </FormGroup>
        <FormGroup>
          <Lable>Salary</Lable>
          <Input
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required
            min={0}
            type={"number"}
            placeholder="Enter employee salary"
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </Modal>
  );
};
