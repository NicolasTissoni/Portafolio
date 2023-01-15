import React from 'react';

import './rutas.scss';

import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import Contacto from '../../components/contacto/Contacto';
import Curriculum from '../../components/curriculum/Curriculum';
import Inicio from '../../components/inicio/Inicio';
import Footer from '../../components/layout/footer/Footer';
import HeaderNav from '../../components/layout/headerNav/HeaderNav';
import Portafolio from '../../components/portafolio/Portafolio';
import Servicios from '../../components/servicios/Servicios';
import Error404 from '../../components/error404/Error404';
import Proyecto from '../../components/proyecto/Proyecto';

const Rutas = () => {
    return (
        <BrowserRouter>
            <HeaderNav />
            <section className='main-content'>
                <Routes>
                    <Route path='/' element={<Navigate to='/inicio' />}/>
                    <Route path='/inicio' element={<Inicio />}/>
                    <Route path='/portafolio' element={<Portafolio />}/>
                    <Route path='/servicios' element={<Servicios />}/>
                    <Route path='/curriculum' element={<Curriculum />}/>
                    <Route path='/contacto' element={<Contacto />}/>
                    <Route path='/proyecto/:id' element={<Proyecto />}/>
                    <Route path='*' element={<Error404 />}/>
                </Routes>
            </section>
            <Footer />
        </BrowserRouter>
    )
};

export default Rutas;