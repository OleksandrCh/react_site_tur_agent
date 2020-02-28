import React from 'react';

function Header(props) {
    return (
        <nav className="navbar fixed-top navbar-dark bg-primary row">
            < a className="navbar-brand col-12 col-md-4 col-lg-3" href="#"> Ваш личный турагент </a>
            <button type="button" className="btn btn-outline-warning col-12 col-md-2">Просчитать Тур</button>
            <button type="button" className="btn btn-outline-warning col-12 col-md-2">Предложения</button>
            <button type="button" className="btn btn-outline-warning col-12 col-md-2 mr-2">Контакты</button>
        </nav>



        // < nav className="navbar sticky-top navbar-dark bg-primary">
        //     < a className="navbar-brand" href="#"> Sticky top </a>
        //
        //     <button type="button" className="btn btn-outline-warning">Warning</button>
        //     <button type="button" className="btn btn-outline-warning">Warning</button>
        //     <button type="button" className="btn btn-outline-warning">Warning</button>
        // </nav>
    )
}

export default Header;