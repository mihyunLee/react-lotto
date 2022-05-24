import { createContext } from "react";

export const ModalsDispatchContext = createContext({
  // 필요한 함수
  open: () => {},
  close: () => {},
});

export const ModalsStateContext = createContext([]);
