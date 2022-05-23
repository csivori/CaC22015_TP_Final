import React from 'react';
import AreaConTooltip, { AreaConTooltipUbicaciones } from '../Tooltip/AreaConTooltip';
import estilos from './MovieCard.module.css';

const MovieCard = ({children, caption, tooltipText, clasesExtras, alClickear}) => {
  
  console.log("Entro a MovieCard...");
  const clases = `${estilos.card} ${clasesExtras?? ""}`
  console.log("Clases del MovieCard...");

  tooltipText = tooltipText ?? caption;
  
  return (
    <>
      <AreaConTooltip tooltipText={tooltipText} ubicacion={AreaConTooltipUbicaciones.Arriba} > 
        <div className={estilos.cardZona}>
          {caption && <h3 className={estilos.cardTitulo}>{caption}</h3>}
          <div className={clases}>
          </div>
        </div>
      </AreaConTooltip>
    </>
  )
};

export default MovieCard;