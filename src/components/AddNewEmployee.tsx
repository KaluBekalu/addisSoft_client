import React, { FormEvent, useState } from "react";
import { addEmployeeAction } from "../actions";
import { Button } from "../components/Button";
import { H1 } from "../components/Typography";
import { Modal } from "../components/Modal";
import {
  Input,
  Select,
  Option,
  Lable,
  FormGroup,
  Form,
} from "../components/Form";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Close } from "../components/Close";

export type IAddFormType = {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AddNewEmployee = ({ setModalVisible }: IAddFormType) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const [birthDate, setBirthDate] = useState("");
  const [salary, setSalary] = useState("");

  const clearForm = () => {
    setName("");
    setSalary("");
    setBirthDate("");
  };

  const handleAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let data = {
      name,
      birthDate,
      gender,
      salary,
    };
    addEmployeeAction(data);
    setModalVisible(false);
    clearForm();
  };
  return (
    <Modal>
      <Form onSubmit={(e) => handleAdd(e)}>
        <Close onClick={() => setModalVisible(false)}>
          <AiOutlineCloseCircle />
        </Close>
        <H1 style={{ marginBottom: 10 }}>Add new Employee</H1>
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
