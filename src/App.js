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
            <Nav sidebarData = {props.appState.sidebarData}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={"/dialogs/*"} element={<Dialogs messagesPage = {props.appState.messagesPage}/>}/>
                    <Route path={"/profile/*"} element={<Profile profilePage ={props.appState.profilePage} />}/>
                </Routes>

            </div>
        </div>
    );
}


export default App;
