import React from 'react';

function Footer(props) {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand" href="#"> Ваш личный турагент </a>
            <button type="button" className="btn btn-outline-warning">Просчитать Тур</button>
            <button type="button" className="btn btn-outline-warning">Предложения</button>
            <button type="button" className="btn btn-outline-warning">Контакты</button>
        </nav>
    );
}

export default Footer;