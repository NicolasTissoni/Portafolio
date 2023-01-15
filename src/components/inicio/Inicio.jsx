import React from 'react';
import { Link } from 'react-router-dom';
import ListadoTrabajos from '../ListadoTrabajos';
import './inicio.scss';

const Inicio = () => {
    return (
        <div className='inicio'>
            <h1>
                Hola, soy Nicolas Tissoni y soy <strong>Desarrollador Web</strong> en Argentina,
                y ofrezco mis servicios de <strong>programación</strong> y desarrollo en
                todo tipo de proyectos web.
            </h1>

            <h2>
                Te ayudo a crear tu pagina o aplicacion web. 
                <Link to='/contacto'>Contactá conmigo.</Link>
            </h2>
        </div>
    )
};

export default Inicio;