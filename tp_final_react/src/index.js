import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Carrousel from "./components/Carrousel/Carrousel";
import MovieCard from "./components/MovieCard/MovieCard";
import AreaConTooltip, {
  AreaConTooltipUbicaciones,
} from "./components/Tooltip/AreaConTooltip";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Carrousel caption="Mas Vistas" avanzarDeA="1" cantAMostrar="3" >
        <MovieCard caption="Peli 1" tooltipText="Ver la Pelicula 1" />
        <MovieCard caption="Peli 2" />
        <MovieCard caption="Peli 3" />
        <MovieCard caption="Peli 4" />
        <MovieCard caption="Peli 5" />
        <MovieCard caption="Peli 6" />
      </Carrousel>
      <Carrousel>
        <MovieCard caption="Peli 1" tooltipText="Ver la Pelicula 1" />
        <MovieCard caption="Peli 2" />
        <MovieCard caption="Peli 3" />
        <MovieCard caption="Peli 4" />
        <MovieCard caption="Peli 5" />
        <MovieCard caption="Peli 6" />
      </Carrousel>
      <Carrousel>
        <MovieCard tooltipText="Ver la Pelicula 1" />
        <MovieCard caption="Peli 2" />
        <MovieCard tooltipText="Ver la Pelicula 3" />
        <MovieCard caption="Peli 4" />
        <MovieCard tooltipText="Ver la Pelicula 5" />
        <MovieCard caption="Peli 6" />
      </Carrousel>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
