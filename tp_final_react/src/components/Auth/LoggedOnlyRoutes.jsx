import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { LoggedUser } from './AuthContext';

export const navigate = useNavigate;

const RutasProtegidas = ({children}) => {

  const {estado} = useContext(LoggedUser);
  
  if (estado.isLogged) {
      return children;
  } else {
      return <Navigate to="/Login" replace={true} />;
  }
};

export default RutasProtegidas;