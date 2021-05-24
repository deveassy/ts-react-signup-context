import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Context } from "../context";

// type StateType = {
//   name: string;
//   age: string;
//   email: string;
// };

// type FormProps = {
//   onSubmit: (item: StateType) => void;
// };

export default function Form() {
  const { action } = useContext(Context);
  const [newInfo, setNewInfo] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setNewInfo({
      ...newInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newInfo.name || !newInfo.age || !newInfo.email)
      return alert("빈칸을 채워주세요!");
    // onSubmit(newInfo);
    setNewInfo({
      name: "",
      age: "",
      email: "",
    });
  };

  return (
    <FormContainer>
      <FormWrapper onSubmit={handleSubmit}>
        <SignupInput
          placeholder="이름"
          name="name"
          value={newInfo.name}
          onChange={handleChange}
        />
        <SignupInput
          placeholder="나이"
          name="age"
          value={newInfo.age}
          onChange={handleChange}
        />
        <SignupInput
          placeholder="이메일"
          name="email"
          value={newInfo.email}
          onChange={handleChange}
        />
        <SubmitButton type="submit">제출</SubmitButton>
      </FormWrapper>
    </FormContainer>
  );
}

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled(FlexDiv)`
  flex-direction: column;
`;
const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const SignupInput = styled.input``;
const SubmitButton = styled.button``;
