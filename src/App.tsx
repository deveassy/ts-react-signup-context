import React from "react";
import styled from "styled-components";

export default function App() {
  return (
    <Container>
      <ProfileContainer>
        <ProfileText>이름 : </ProfileText>
        <ProfileText>나이 : </ProfileText>
        <ProfileText>이메일 : </ProfileText>
      </ProfileContainer>
      <FormContainer>
        <SignupInput placeholder="이름" />
        <SignupInput placeholder="나이" />
        <SignupInput placeholder="이메일" />
        <SignupInput placeholder="비밀번호" />
        <SubmitButton>제출</SubmitButton>
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
