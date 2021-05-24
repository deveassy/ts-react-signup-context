import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../context";

// type StateType = {
//   name: string;
//   age: string;
//   email: string;
// };

// type ProfileProps = {
//   value: StateType;
// };

// 받은 데이터 (props = value)를 제 위치에 뿌려주기만 하면 되는 컴포넌트
export default function Profile() {
  const { state } = useContext(Context);

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
