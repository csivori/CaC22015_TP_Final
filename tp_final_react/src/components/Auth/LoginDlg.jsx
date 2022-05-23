import { useContext, useState } from 'react';
import { authTypes } from './authTypes';
import { LoggedUser } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginDlg = ({pathIngreso, pathCancela}) => {       
    const {estado, accionar} = useContext(LoggedUser);
    const [formLogin, setFormLogin] = useState({email:"", pwd:""});

    const navigate = useNavigate();

    const autenticarUsuario = () => {return (formLogin.email !== "" && formLogin.pwd === "pp") ? 1 : 0}

    const handleSubmit = (ev) => {
      const usr = {id: autenticarUsuario(), name: formLogin.email}; 
      if (usr.id > 0) {
        console.log("Estado Antes: ", estado);
        console.log("Usuario autenticado: ", usr);
        accionar({type: authTypes.LOGIN, payload:{user: usr}});
        navigate(pathIngreso, {replace: true});
        // setTimeout(() => navigate(pathIngreso, {replace: true}), 0);
      } else {
        alert(`Usuario ${formLogin.email} Desconocido o Contraseña Incorrecta !!`)
      }
    };
    
    const handleCancel = (ev) => {
      console.log("Canceló");
      navigate(pathCancela, {replace: true});
    };

    const handleChange = (ev) => {
      setFormLogin({...formLogin, [ev.target.name]: ev.target.value});
    };
 
    return (
      <>
        {/* <div className="modal"> */}
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Ingrese al Sistema</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form className="modal-body">
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Correo Electrónico" name="email" onChange={handleChange} value={formLogin.email} />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Contraseña" name="pwd" onChange={handleChange} value={formLogin.pwd} />
                </div>
              </form>
              <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleCancel} data-bs-dismiss="modal">Cancelar</button>
                  <button type="button" className="btn btn-primary" onClick={handleSubmit}>Ingresar</button>
                </div>
            </div>
          </div>
        {/* </div> */}
      </>
    )
  }

export default LoginDlg;