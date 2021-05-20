import React, { useState } from "react";
import styled from "styled-components";

type FormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function Form(props: FormProps) {
  const { onSubmit } = props;

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

  //   const handleKeyPress = () => {
  //       if(e.key === "Enter") {
  //           setNewInfo({
  //               name,
  //               age,
  //               email
  //           })
  //       }
  //   }

  return (
    <FormContainer>
      <FormWrapper onSubmit={onSubmit}>
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
