import { createContext, Dispatch, ReactNode, useReducer } from "react";

type StateType = {
  name: string;
  age: string;
  email: string;
};

type Action = {
  type: "SUBMIT";
  data: StateType;
};

const initialState = {
  name: "",
  age: "",
  email: "",
};

export const StateContext = createContext<StateType | undefined>(undefined);
export const DispatchContext = createContext<Dispatch<Action> | undefined>(
  undefined
);

const Reducer = (state: StateType, action: Action): StateType => {
  switch (action.type) {
    case "SUBMIT":
      return action.data;
    default:
      return state;
  }
};

function ContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default ContextProvider;
