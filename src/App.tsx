import React, { useState } from "react";
import styled from "styled-components";

type InputValue = {
  name: string;
  age: string;
  email: string;
};

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [totalValue, setTotalValue] = useState<InputValue>({
    name: "",
    age: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!name || !age || !email) return alert("빈칸을 채우세요");
    setTotalValue({
      name,
      age,
      email,
    });
    setName("");
    setAge("");
    setEmail("");
  };

  return (
    <Container>
      <ProfileContainer>
        <ProfileText>이름 : {totalValue.name}</ProfileText>
        <ProfileText>나이 : {totalValue.age}</ProfileText>
        <ProfileText>이메일 : {totalValue.email}</ProfileText>
        <ProfileText>{/*저장된 정보 없을 경우 보여줄 메세지*/}</ProfileText>
      </ProfileContainer>
      <FormContainer>
        <SignupInput
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <SignupInput
          placeholder="나이"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <SignupInput
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <SubmitButton onClick={handleSubmit}>제출</SubmitButton>
      </FormContainer>
    </Container>
  );
}

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled(FlexDiv)`
  flex-direction: column;
  height: 100vh;
`;

const ProfileContainer = styled(FlexDiv)`
  flex-direction: column;
`;
const ProfileText = styled.p``;
const FormContainer = styled(FlexDiv)`
  flex-direction: column;
`;
const SignupInput = styled.input``;
const SubmitButton = styled.button``;
