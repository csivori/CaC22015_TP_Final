* CONTEXTO:

	Debe englobar las 
	- <AuthContext>
		{children}
	  </AuthContext>

* COMPONENTES:

	- LoginDlg(handlerIngreso, handlerCancela): Frame para el Login.
	      Recibe 2 funciones:
	      - handlerIngreso: Se ejecuta una vez que el usuario sea autenticado 
        	                exitosamente. Típicamente es un "() => navigate("/", {replace: true});"
	      - handlerCancela: Se ejecuta cuando el usuario pulsa el botón Cancela.
                	        Típicamente es un "() => navigate("???", {replace: true});"

	- LogoutBtn: Boton para Logout

	- LoggedUserFrm: Frame que muestra el Usuario logueado

	- AuthContext: Contexto para el manejo de la autenticación

* EJEMPLO DE USO:

	const App = () => {
	  return (
	    <>
	      <AuthContext>
	        <BrowserRouter>
        	  <div className="container mt-5">
	            <BarraDeNavegacion cant='4' />
        	    <main>
		      <div className="container mt-2">
	              <Routes>
	                <Route path="/Login" element={<LoginDlg pathIngreso="/" pathCancela="/Chau" />} />
	                <Route path="/Chau" element={<Chau />} />
	                <Route path="*" element={
	                  <LoggedOnlyRoutes>
	                    <Routes>
	                      <Route path="/" element={<Navigate to="/Pagina1" />} />
	                      <Route path="/Pagina1" element={<Pagina1 pagBack="Pagina2" pagFwd="Pagina4" />} />
	                      <Route path="/Pagina2" element={<Pagina2 pagBack="Pagina1" pagFwd="Pagina3" />} />
	                      <Route path="/Pagina3" element={<Pagina3 pagBack="Pagina2" pagFwd="Pagina4" />} />
	                      <Route path="*" element={<Pagina4 pagBack="Pagina1" pagFwd="Pagina3" />} />
	                    </Routes>
	                  </LoggedOnlyRoutes>
	                } />
	              </Routes>
	              </div>
	            </main>
	          </div>
	        </BrowserRouter>
	      </AuthContext>
	    </>
	  );
	};