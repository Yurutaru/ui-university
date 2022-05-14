import React from 'react';
import { facultyStore } from '../store/facultyStore';

const RootStateContext = React.createContext();
const RootStateContextValue = {
  facultyStore,
};

export const RootStateProvider = ({ children }) => {
  return <RootStateContext.Provider value={RootStateContextValue}>{children}</RootStateContext.Provider>;
};

export const useRootStore = () => React.useContext(RootStateContext);
