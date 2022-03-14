import React, {Component} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Nav";
import Dialogs from "./Components/Dialogs/Dialogs";
import Profile from "./Components/Profile/Profile";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div class='app-wrapper-content'>
                <Dialogs/>
            </div>
            {/*<Profile/>*/}
        </div>
    );
}


export default App;
