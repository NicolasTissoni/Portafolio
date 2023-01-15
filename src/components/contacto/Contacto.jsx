import React from 'react';
import './contacto.scss';

const Contacto = () => {
    return (
        <div className='pagina'>
            <h1 className='encabezado'>Contacto</h1>
            <form className='contacto' action='mailto:nicotissoni12@gmail.com' >
                <input className='inputs' type='text' placeholder='Nombre' />
                <input className='inputs' type='text' placeholder='Apellido' />
                <input className='inputs' type='text' placeholder='Email' />
                <textarea className='inputs' placeholder='Motivo de Contacto' />
                <input className='button' type='submit' value='Enviar' />
            </form>
            <div className='contacto-iconos'>
                <a 
                    href='https://www.linkedin.com/in/nicolas-tissoni-9b4838207/' 
                    target='_blank'>
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a 
                    href='https://github.com/NicolasTissoni' 
                    target='_blank'>
                    <i className="fa-brands fa-github"></i>
                </a>
            </div>
        </div>
    )
};

export default Contacto;