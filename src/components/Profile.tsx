import React, { useContext } from "react";
import styled from "styled-components";
import { StateContext } from "../context";

export default function Profile() {
  const state = useContext(StateContext);
  if (!state) return null;

  return (
    <ProfileContainer>
      <ProfileText>이름 : {state.name}</ProfileText>
      <ProfileText>나이 : {state.age}</ProfileText>
      <ProfileText>이메일 : {state.email}</ProfileText>
      <ProfileText>
        {state.name && state.age && state.email
          ? "안녕하세요 :)"
          : "회원 정보가 없어요 :("}
      </ProfileText>
    </ProfileContainer>
  );
}

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileContainer = styled(FlexDiv)`
  flex-direction: column;
`;
const ProfileText = styled.p``;
