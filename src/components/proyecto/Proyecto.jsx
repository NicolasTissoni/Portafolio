import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { trabajos } from '../../data/trabajos.js';
import './proyecto.scss';

const Proyecto = () => {
    const [proyecto, setProyecto] = useState({});
    const params = useParams();
    
    useEffect(()=> {
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);

        setProyecto(proyecto[0]);
    }, []);

    return (
        <div className='pagina pagina-trabajo'>
            <div className='mascara'>
                <img src={'/images/' + proyecto.id + '.png'} alt='Proyecto'/>
            </div>
            <h1 className='encabezado'>{proyecto.nombre}</h1>
            <p>{proyecto.tecnologias}</p>
            <p>{proyecto.descripcion}</p>
            <a href={proyecto.url} target='_blank'>Ir al proyecto</a>
        </div>
    )
};

export default Proyecto;