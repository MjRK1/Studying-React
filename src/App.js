import React, {Component} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Nav";
import Dialogs from "./Components/Dialogs/Dialogs";
import Profile from "./Components/Profile/Profile";
import {Routes, Route, Link} from "react-router-dom";

const App = (props) => {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <div class='app-wrapper-content'>
                <Routes>
                    <Route path={"/dialogs"} element={<Dialogs/>}/>
                    <Route path={"/profile"} element={<Profile/>}/>
                </Routes>

            </div>
        </div>
    );
}


export default App;
