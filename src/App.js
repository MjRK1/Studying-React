import React, {Component} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Nav";
import Profile from "./Components/Profile/Profile";
import {Routes, Route, Link} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DiologsContainer";

const App = (props) => {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Nav sidebarData={props.state.sidebarData}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={"/dialogs/*"} element={<DialogsContainer
                        store={props.store}/>}/>
                    <Route path={"/profile/*"} element={<Profile
                      store = {props.store}
                    />}/>
                </Routes>

            </div>
        </div>
    );
}


export default App;
