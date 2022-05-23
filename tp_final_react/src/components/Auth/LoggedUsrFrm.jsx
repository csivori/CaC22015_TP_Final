import { useContext } from 'react';
import { LoggedUser } from './AuthContext';
import LogoutBtn from './LogoutBtn';

const LoggedUsrFrm = () => {
  
  let b_am = "border border-3 border-warning";
  let b_az = "border border-3 border-primary";
  let b_ro = "border border-3 border-danger";
  let b_ve = "border border-3 border-success";
  b_am = b_az = b_ro = b_ve = "";

  const {estado} = useContext(LoggedUser);

  return (
    <>
      <div className={`container m-0 p-0 align-items-end ${b_az}`}>
        <div className={`row m-0 p-0  ${b_ro}`}>
          <div className={`col-10 p-0 text-end  ${b_am}`}>
            <div className={`row m-0 ${b_az}`}>
              <p className={`my-0 p-0`}>Usuario: <strong>{(estado.isLogged) ? `(${estado.userId}) ${estado.userName}` : "-"}</strong></p>
            </div>
            <div className={`row m-0 ${b_az}`}>
              <p className={`my-0 p-0`}>Logueado Desde: <strong>{(estado.loggedSince !== "") ?estado.loggedSince : "-"}</strong></p>
            </div>
            <div className={`row m-0 p-0 ${b_az}`}>
              <p className={`m-0 p-0`}>Ultimo Login: <strong>{(estado.lastLogged !== "") ? estado.lastLogged : "-"}</strong></p>
            </div>
          </div>
          <div className={`col align-items-top text-center ${b_ve}`}>
            <span className={`${b_az}`}>{(estado.userName !== null) ? <LogoutBtn /> : null}</span>
          </div>
        </div>
      </div>
    </>
  )
};

export default LoggedUsrFrm;