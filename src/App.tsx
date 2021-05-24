import React, { useState } from "react";
import styled from "styled-components";

import Profile from "./components/Profile";
import Form from "./components/Form";
import { ContextProvider } from "./context";

type StateType = {
  name: string;
  age: string;
  email: string;
};

export default function App() {
  // const [totalValue, setTotalValue] = useState<StateType>({
  //   name: '',
  //   age: '',
  //   email: ''
  // });

  // const handleSubmit = (data: StateType) => {
  //   // App은 가공이 다 되서 전달받은 data를 받아서 Profile 컴포넌트에 전달하기만 하면 된다.
  //   setTotalValue(data);
  // };

  return (
    <ContextProvider>
      <Container>
        <Profile />
        <Form />
      </Container>
    </ContextProvider>
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
