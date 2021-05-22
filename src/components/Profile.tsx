import React from "react";
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

  return (
    <ProfileContainer>
      <ProfileText>이름 : {value.name}</ProfileText>
      <ProfileText>나이 : {value.age}</ProfileText>
      <ProfileText>이메일 : {value.email}</ProfileText>
      <ProfileText>
        {value.name && value.age && value.email
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
