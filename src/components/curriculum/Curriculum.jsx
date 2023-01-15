import React from 'react';
import './curriculum.scss';

const Curriculum = () => {
    return (
        <div className='pagina'>
            <h1 className='encabezado'>Curriculum</h1>
            <div className='contenedor-cv'>
                <h2>Experiencia</h2>
                    <ul>
                        <li>
                            VTR Empresa Chilena que Provee servicios de
                            televisión por cable, IPTV, Telefonía Fija, Fibra
                            Óptica, Acceso a internet y Telefonía a Nivel
                            Nacional Administración remotade File Share
                            - Junior 2018 de enero hasta diciembre
                        </li>
                    </ul>

                    <h2>Conocimientos</h2>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>SASS</li>
                        <li>JS</li>
                        <li>REACT.JS</li>
                        <li>GIT</li>
                        <li>FIREBASE</li>
                        <li>NODE.JS</li>
                        <li>PYTHON</li>
                    </ul>

                    <h2>Educacion</h2>
                    <ul>
                        Instituto Ayelén, Garín,
                        Escobar - Secundario 
                        Completo 2019 Bachiller en 
                        Ciencias Sociales
                    </ul>

                    <h2>Proyectos Personales</h2>
                    <ul>
                        <li>Curso de React</li>
                        <li>Curso de React en Udemy</li>
                        <li>Proyecto Peliculas</li>
                        <li>Proyecto Almacen de Pelis</li>
                    </ul>
            </div>
        </div>
    )
};

export default Curriculum;