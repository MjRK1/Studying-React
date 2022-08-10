import React from 'react';
import './App.css';
import Nav from "./Components/Navbar/Nav";
import {Route, Routes, useLocation, useNavigate, useParams} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DiologsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import FriendsContainer from "./Components/Friends/FriendsContainer";
import LoginPage from "./Components/Login/Login.jsx";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/common/preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        } else {
            return (
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Nav/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path={"/dialogs/*"} element={<DialogsContainer/>}/>
                            <Route path={"/profile/:userId"} element={<ProfileContainer/>}/>
                            <Route path={"/profile/*"} element={<ProfileContainer/>}/>
                            <Route path={"/users/*"} element={<UsersContainer/>}/>
                            <Route path={"/friends/*"} element={<FriendsContainer/>}/>
                            <Route path={'/login'} element={<LoginPage/>}/>
                        </Routes>

                    </div>
                </div>
            );
        }
    }
}
let withRouter = (Component) => {
    let ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component {...props}
                       router={{location, navigate, params}}/>
        );
    }

    return ComponentWithRouterProp;
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default compose (
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
