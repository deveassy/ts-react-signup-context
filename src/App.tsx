import React from "react";
import styled from "styled-components";

import Profile from "./components/Profile";
import Form from "./components/Form";
import ContextProvider from "./context";

export default function App() {
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
