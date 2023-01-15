import React from 'react';
import { Link } from 'react-router-dom';
import { trabajos } from '../data/trabajos'

const ListadoTrabajos = () => {
    return (
            <section className='trabajos'>
                {
                    trabajos.map(trabajo => {
                        return (
                            <article key={trabajo.id} className='trabajo-item'>
                                <div className='mascara'>
                                    <img src={'/images/' + trabajo.id + '.png'} alt='Proyecto'/>
                                </div>
                                <span>{trabajo.categoria}</span>
                                <h2><Link to={`/proyecto/${trabajo.id}`}>{trabajo.nombre}</Link></h2>
                                <h3>{trabajo.tecnologias}</h3>
                            </article>
                        )
                    })
                }
            </section>
    )
};

export default ListadoTrabajos;