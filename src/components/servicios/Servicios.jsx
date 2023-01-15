import React from 'react';
import './servicios.scss';

const Servicios = () => {
    return (
        <div className='pagina'>
            <h1 className='encabezado'>Servicios</h1>

            <section className='servicios'>
                <article className='servicio'>
                    <h2>Diseño Web</h2>
                    <p>Hago que tu web se vea bien</p>
                </article>

                <article className='servicio'>
                    <h2>Desarrollo Web</h2>
                    <p>Creo tu pagina desde cero</p>
                </article>

                <article className='servicio'>
                    <h2>Posicionamiento web</h2>
                    <p>Hago que tu web aparezca en google y la vea la gente</p>
                </article>
            </section>
        </div>
    )
};

export default Servicios;