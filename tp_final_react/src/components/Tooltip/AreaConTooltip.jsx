import React from 'react';
import styles from './AreaConTooltip.module.css';

export const AreaConTooltipUbicaciones = {
  Arriba: "tooltiptextT", 
  Abajo:"tooltiptextB",
  Izquierda: "tooltiptextL",
  Derecha:"tooltiptextR", 
}

const AreaConTooltip = ({children, tooltipText, ubicacion}) => {
  
  let clasesTooltipText = '';
  switch (ubicacion) {
    case AreaConTooltipUbicaciones.Arriba:
      clasesTooltipText = `${styles.tooltiptext} ${styles.tooltiptextT}`;
      break;
    case AreaConTooltipUbicaciones.Abajo:
      clasesTooltipText = `${styles.tooltiptext} ${styles.tooltiptextB}`;
      break;
    case AreaConTooltipUbicaciones.Derecha:
      clasesTooltipText = `${styles.tooltiptext} ${styles.tooltiptextR}`;
      break;
      case AreaConTooltipUbicaciones.Izquierda:
        clasesTooltipText = `${styles.tooltiptext} ${styles.tooltiptextL}`;
        break;
      case AreaConTooltipUbicaciones.Centro:
        clasesTooltipText = `${styles.tooltiptext} ${styles.tooltiptextC}`;
        break;
      case null:
      clasesTooltipText = `${styles.tooltiptext}`;
      break;
    default:
      alert(`el valor de <ubicacion> (${ubicacion}) en el componente AreaConTooltip (${tooltipText})`)
  }

  return (
    <div className={styles.tooltip}>
      <span className={clasesTooltipText}>{tooltipText}</span>
      {children}
    </div>
  )
};

export default AreaConTooltip;