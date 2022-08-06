import React from 'react';
import './App.css';
import Nav from "./Components/Navbar/Nav";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DiologsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import FriendsContainer from "./Components/Friends/FriendsContainer";
import LoginPage from "./Components/Login/Login.jsx";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Nav />
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path={"/dialogs/*"} element={<DialogsContainer />}/>
                    <Route path={"/profile/:userId"} element={<ProfileContainer />}/>
                    <Route path={"/profile/*"} element={<ProfileContainer />}/>
                    <Route path={"/users/*"} element={<UsersContainer/>}/>
                    <Route path={"/friends/*"} element={<FriendsContainer/>}/>
                    <Route path={'/login'} element={<LoginPage/>}/>
                </Routes>

            </div>
        </div>
    );
}

export default App;
