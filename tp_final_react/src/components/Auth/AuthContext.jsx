import { createContext, useReducer } from 'react';
import { authReducer, initAuthReducer } from './authReducer';

export const LoggedUser = createContext();

const AuthContext = ({children}) => {

  const [estado, accionar] = useReducer(authReducer, {}, initAuthReducer);

  return (
    <>
      <LoggedUser.Provider value={{estado, accionar}}>
        {children}
      </LoggedUser.Provider >
    </>
  )
};

export default AuthContext;