import React from 'react'
import { Link } from 'react-router-dom'

import Teacher1 from "./img/imagem1.jpeg"
import Teacher2 from "./img/imagem2.jpeg"
import Teacher3 from "./img/imagem3.jpeg"


const Carrosel1 = props => {
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-8 m-auto">

                        <h1>Slider simples</h1>

                        <div className="carousel slide" data-ride="carousel">

                            <div className="carousel-inner">

                                <div className="carousel-item ">
                                    <img src={Teacher1} className="img-fluid" />
                                </div>
                                <div className="carousel-item active">
                                    <img src={Teacher2} className="img-fluid" />
                                </div>
                                <div className="carousel-item">
                                    <img src={Teacher3} className="img-fluid" />
                                </div>

                            </div>

                        </div>


                        <h1>Slider com controles</h1>
                        <div id="carousel-controles" class="carousel slide" data-ride="carousel">

                            <div class="carousel-inner">

                                <div className="carousel-item ">
                                    <img src={Teacher1} className="img-fluid" />
                                </div>
                                <div className="carousel-item active">
                                    <img src={Teacher2} className="img-fluid" />
                                </div>
                                <div className="carousel-item">
                                    <img src={Teacher3} className="img-fluid" />
                                </div>
                            </div>

                            

                            <a href="#carousel-controles" className="carousel-control-prev" data-slide="prev">
                                <samp className="carousel-control-prev-icon"></samp>
                            </a>
                            <a href="#carousel-controles" className="carousel-control-next" data-slide="next">
                                <samp className="carousel-control-next-icon"></samp>
                            </a>

                        </div>






                    </div>
                </div>
            </div>
        </div>

    )
}

export default Carrosel1