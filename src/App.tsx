import React, { useState } from "react";
import styled from "styled-components";

import Profile from "./components/Profile";
import Form from "./components/Form";

type StateType = {
  name: string;
  age: string;
  email: string;
};

export default function App() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>(""); // 초기값을 설정하는 것에 따라서 state의 타입이 결정됨, 그렇기 때문에 명확히 확인할 수 있도록 generic으로 타입 지정해주기.
  const [email, setEmail] = useState<string>("");
  const [totalValue, setTotalValue] = useState<StateType>({
    name: "",
    age: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      <Profile value={totalValue} />
      {/* Profile 컴포넌트에서는 value값을 사용하기 */}
      <Form onSubmit={handleSubmit} />
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
