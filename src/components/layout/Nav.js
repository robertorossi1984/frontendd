import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../styles/componets/layout/Nav.css'
const Nav = (props) => {
    return (



        <nav>
            {/* <div>Nav</div> */}


            <div className='holder'>
                <ul>
                    <li><NavLink activeClassName='activo' exact to="/">Home</NavLink></li>
                    <li><NavLink activeClassName='activo' exact to="/nosotros">Nosotros</NavLink></li>
                    <li><NavLink activeClassName='activo' exact to="/novedades">Novedades</NavLink></li>
                    <li><NavLink activeClassName='activo' exact to="/contacto">Contacto</NavLink></li>
                    <li><NavLink activeClassName='activo' exact to="/servicios">Servicios</NavLink></li>
                    <li><NavLink activeClassName='activo' exact to="/galeria">Galeria</NavLink></li>

                </ul>
            </div>
        </nav>

    );
}
export default Nav