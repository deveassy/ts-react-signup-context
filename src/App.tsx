/import React, { useState } from "react";
import Profile from "./components/Profile";
import SignupForm from "./components/SignupForm";

// import { ContextProvider } from "./contexts/Context";

type AppProps = {
  onSubmit: () => void;
  newInfo: {
    name: string;
    age: number;
    email: string;
    pwd: string;
  };
};

function App({ onSubmit }: AppProps) {
  const [state, setState] = useState({
   
  });
  return (
    // <ContextProvider>
    <div>
      <Profile>{state}</Profile>
      <SignupForm onSubmit={onSubmit} />
    </div>
    // </ContextProvider>
  );
}

export default App;
