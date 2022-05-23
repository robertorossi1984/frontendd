import React from "react";
import '../styles/componets/pages/HomePage.css';
const HomePage = (props) => {
    return (
        
            <main className="holder">
                <div className="homeimg">
                    <img src="images/galeria/img01.jpg" alt="avion" />

                </div>
                <div className="columnas">
                    <div className="bienvenidos left">
                        <h2>Bienvenidos</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem alias ab hic iure a sit accusantium
                            fugiat exercitationem. Voluptates, recusandae. Temporibus similique qui repudiandae a sint nesciunt
                            accusantium at dolorum.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum eos vitae veritatis maxime
                            possimus quis, harum adipisci omnis aliquid laudantium nihil aliquam repellat, voluptatibus sit
                            assumenda beatae! Quam, quisquam!</p>
                    </div>
                    <div className="testimonio right">
                        <h2>Testimonios</h2>
                        <div className="testimonio">
                            <span className="cita">Simplemente excelente</span>
                            <span className="autor">Juan Perez</span>

                        </div>
                    </div>
                </div>
            </main>
        


    );
}
export default HomePage;
