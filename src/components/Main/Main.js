import React from 'react';
import Slider from "./slider/Slider";
import Content from "./content/Content";
import Orderstages from "./orderstages/Orderstages";

function Main(props) {
    const url = props.data;

    return (
        <div>
            <Slider/>
            <Content urlImg={url}/>
            <Orderstages />
        </div>

    );
}

export default Main;