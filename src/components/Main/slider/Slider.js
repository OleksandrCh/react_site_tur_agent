import React from 'react';
import './Slider.css';

function Slider(props) {
    return (
        // <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
        //     <div className="carousel-inner">
        //         <div className="carousel-item active" data-interval="8000">
        //             <img src="https://cdn.pixabay.com/photo/2017/06/17/18/33/background-2413074_960_720.jpg" className="d-block w-100" alt="..."/>
        //         </div>
        //         <div className="carousel-item" data-interval="5000">
        //             <img src="https://cdn.pixabay.com/photo/2017/06/28/16/48/amazing-2451315_960_720.jpg" className="d-block w-100" alt="..."/>
        //         </div>
        //         <div className="carousel-item">
        //             <img src="https://cdn.pixabay.com/photo/2014/04/05/11/39/beach-316538_960_720.jpg" className="d-block w-100" alt="..."/>
        //         </div>
        //     </div>
        //     <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
        //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span className="sr-only">Previous</span>
        //     </a>
        //     <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
        //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span className="sr-only">Next</span>
        //     </a>
        // </div>

        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://cdn.pixabay.com/photo/2017/06/17/18/33/background-2413074_960_720.jpg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block bg-rgba-secondary">
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src="https://cdn.pixabay.com/photo/2017/06/28/16/48/amazing-2451315_960_720.jpg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block bg-rgba-secondary">
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src="https://cdn.pixabay.com/photo/2014/04/05/11/39/beach-316538_960_720.jpg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block bg-rgba-secondary">
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Slider;