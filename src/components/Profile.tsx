import React, { useState, useEffect } from "react";
import styled from "styled-components";

type StateType = {
  name: string;
  age: string;
  email: string;
};

type ProfileProps = {
  value: StateType;
};

// 받은 데이터 (props = value)를 제 위치에 뿌려주기만 하면 되는 컴포넌트
export default function Profile(props: ProfileProps) {
  const { value } = props;
  const [state, setState] = useState("회원정보가 없어요.");

  useEffect(() => {
    console.log("rendering");
    return () => {
      setState("");
    };
  }, [value]);

  return (
    <ProfileContainer>
      <ProfileText>이름 : {value.name}</ProfileText>
      <ProfileText>나이 : {value.age}</ProfileText>
      <ProfileText>이메일 : {value.email}</ProfileText>
      <ProfileText>{state}</ProfileText>
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
