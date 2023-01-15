import React from 'react';
import './portafolio.scss';
import ListadoTrabajos from '../ListadoTrabajos';

const Portafolio = () => {
    return (
        <div className='pagina'>
            <h1 className='encabezado'>Portafolio</h1>
            <ListadoTrabajos />
        </div>
    )
};

export default Portafolio;