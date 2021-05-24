import { createContext, useState } from "react";

export const Context = createContext({
  state: { name: "", age: "", email: "" },
  action: {
    setName: () => {},
    setAge: () => {},
    setEmail: () => {},
  },
});

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const value = {
    state: { name, age, email },
    action: { setName, setAge, setEmail },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
