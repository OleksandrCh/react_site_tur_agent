import React from 'react';
import './App.css';
import Footer from "./components/footer/Footer";
import Main from "./components/Main/Main";
import Header from "./components/header/Header";
import Contacts from "./components/contacts/Contacts";

class App extends React.Component {
    state = {
        data: null,
    };

    componentDidMount() {
            fetch('https://jsonplaceholder.typicode.com/photos')
                .then(value => value.json())
                .then(value => {
                    this.setState({data: value});
                    // console.log(value);
                })
    }


    render() {
        {
            console.log(this.state)
        }
        return (
            <div className="App">
                <Header/>
                <Main urlImg={this.state}/>
                <Contacts/>
                <Footer/>
            </div>
        );
    }
}

export default App;
