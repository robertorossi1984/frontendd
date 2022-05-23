import React from "react";
import '../styles/componets/pages/NosotrosPage.css';
const NosotrosPage = (props) => {
    return (
        <div>

            <section className="holder">
                <div className="historia">
                    <h2>Historia</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit dignissimos, modi commodi rerum
                        sapiente animi dolorem iusto assumenda facilis iure ad, ipsa ipsam quidem et, explicabo corporis.
                        Numquam, maxime.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolores voluptatem animi possimus dolorum,
                        sunt veniam, ea aut beatae voluptatum facilis nihil inventore quaerat, ratione excepturi. Illo ratione
                        quaerat nemo?</p>
                </div>
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                    <img src="images/nosotros/nosotros1.jpg" alt="Juan Gomez"/>
                    <h5>Juan Gomez</h5>
                    <h6>Gerente General</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur beatae fugiat facilis
                        laudantium, cum quisquam porro hic saepe, autem inventore nesciunt, perspiciatis veritatis.
                        Accusantium dicta dignissimos magnam tempore harum voluptate?</p>
                    </div>
                    <div className="persona">
                    <img src="images/nosotros/nosotros2.jpg" alt="Diana Reyes"/>
                    <h5>Diana Reyes</h5>
                    <h6>Gerente Comercial</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur beatae fugiat facilis
                        laudantium, cum quisquam porro hic saepe, autem inventore nesciunt, perspiciatis veritatis.
                        Accusantium dicta dignissimos magnam tempore harum voluptate?</p>
                </div>
                <div className="persona">
                    <img src="images/nosotros/nosotros3.jpg" alt="Roberto Zaptos"/>
                    <h5>Roberto Zaptos</h5>
                    <h6>Gerente Sistemas</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur beatae fugiat facilis
                        laudantium, cum quisquam porro hic saepe, autem inventore nesciunt, perspiciatis veritatis.
                        Accusantium dicta dignissimos magnam tempore harum voluptate?</p>
                </div>
                <div className="persona">
                    <img src="images/nosotros/nosotros4.jpg" alt="Sandra Mastropiero"/>
                    <h5>Sandra Mastropiero</h5>
                    <h6>Gerente de Marketing</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur beatae fugiat facilis
                        laudantium, cum quisquam porro hic saepe, autem inventore nesciunt, perspiciatis veritatis.
                        Accusantium dicta dignissimos magnam tempore harum voluptate?</p>
                </div>
                <div className="persona">
                    <img src="images/nosotros/nosotros5.jpg" alt="Luciano Figuero"/>
                    <h5>Luciano Figuero</h5>
                    <h6>Gerente Logistica</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur beatae fugiat facilis
                        laudantium, cum quisquam porro hic saepe, autem inventore nesciunt, perspiciatis veritatis.
                        Accusantium dicta dignissimos magnam tempore harum voluptate?</p>
                </div>

                </div>
            </section>
            
        </div>
    );
}
export default NosotrosPage;
