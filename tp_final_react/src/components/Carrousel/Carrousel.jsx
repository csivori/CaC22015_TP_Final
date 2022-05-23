import React, { useState } from 'react';
import estilos from './Carrousel.module.css';

const Carrousel = ({children, caption, clasesExtras, alClickear, cantAMostrar, avanzarDeA}) => {
  cantAMostrar = (cantAMostrar) ? parseInt(cantAMostrar) : children.length;
  avanzarDeA = (avanzarDeA) ? parseInt(avanzarDeA) : 0;

  const [cur, setCur] = useState(0);
  const [verParcial, setVerParcial] = useState((cantAMostrar > 0 && cantAMostrar < children.length && avanzarDeA > 0));

  console.log("Entro a Carrousel...");
  const clases = `${estilos.carrousel} ${clasesExtras?? ""}`
  console.log("Clases del Carrousel...");

  const handleClickNext = (e) => {
    if (verParcial) {
      if ((cur + avanzarDeA) < (children.length - cantAMostrar)) {
        setCur(cur + avanzarDeA);
      } else {
        setCur(children.length - cantAMostrar);
      };
      console.log("cur", cur);
      for (let a = cur; a < (cur + cantAMostrar); a++) {
        console.log(`children[${a}].props.caption`, children[a].props.caption);
      }  
    }
  }

  const handleClickPrevious = (e) => {
    if (verParcial) {
      if ((cur - avanzarDeA) > 0) {
        setCur(cur - avanzarDeA);
      } else {
        setCur(0);
      };
      console.log("cur", cur);
      for (let a = cur; a < (cur + cantAMostrar); a++) {
        console.log(`children[${a}].props.caption`, children[a].props.caption);
      }  
    }
  }

  return (
    <>
      <div className={estilos.carrouselZona}>
        {caption && <h3 className={estilos.carrouselTitulo}>{caption}</h3>}
        <div className={clases}>
          {verParcial && <button onClick={handleClickPrevious}>&lt;</button>}
          <div className={estilos.carrousel2}>
            {verParcial && children.map((hijo, i) => {return (i>=cur && i<(cur+cantAMostrar)) ? hijo : null})}
            {!verParcial && children}
          </div>
          {verParcial && <button onClick={handleClickNext}>&gt;</button>}
        </div>
      </div>
    </>
  )
};

export default Carrousel;