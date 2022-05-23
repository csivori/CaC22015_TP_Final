import { authTypes } from "./authTypes";

export const initAuthReducer = () => {
  return {
    userId: null,
    userName: null, 
    lastLogged: "",
    loggedSince: "",
    isLogged: false
  };
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case authTypes.LOGIN:
      console.log("State Antes: ", state);
      state = {
        ...state, 
        userId: action.payload.user.id,
        userName: action.payload.user.name,
        loggedSince: new Date().toLocaleString(),
        isLogged: true};
      console.log("State Despues: ", state);
      return state;

    case authTypes.LOGOUT:
      return {
        ...state, 
        userId: null,
        userName: null,
        lastLogged: state.since ?? "",
        loggedSince: null,
        isLogged: false};

    default: 
      alert("Voy a ejecutar la funcion authReducer() con action.type DEFAULT !! ", action);
      return state;     
  }
};