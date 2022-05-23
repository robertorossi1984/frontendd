import React from "react";
import '../styles/componets/pages/ServiciosPage.css';
const ServiciosPage = (props) => {
    return(
        <div>
            <main className="holder">
        <h2>Servicios</h2>
        <div class="servicio">
            <img src="images/servicios/ferroviario.jpg" alt="Tren"/>
            <div className="info">
                <h4>Transporte Ferroviario</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic assumenda ab id sunt dolores dolorem
                    ea. Exercitationem, voluptate laudantium? Ut amet quia nemo quam aspernatur blanditiis provident
                    cumque mollitia inventore.</p>
            </div>
        </div>
        <div className="servicio">
            <img src="images/servicios/aereo.jpg" alt="Tren"/>
            <div class="info">
                <h4>Transporte Aereo</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic assumenda ab id sunt dolores dolorem
                    ea. Exercitationem, voluptate laudantium? Ut amet quia nemo quam aspernatur blanditiis provident
                    cumque mollitia inventore.</p>
            </div>
        </div>
        <div className="servicio">
            <img src="images/servicios/maritimo.jpg" alt="Tren"/>
            <div class="info">
                <h4>Transporte Maritimo</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic assumenda ab id sunt dolores dolorem
                    ea. Exercitationem, voluptate laudantium? Ut amet quia nemo quam aspernatur blanditiis provident
                    cumque mollitia inventore.</p>
            </div>
        </div>

    </main>
        </div>

    );
}
export default ServiciosPage;