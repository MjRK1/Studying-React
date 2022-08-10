import Header from "./Header";
import React from 'react'
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} logout={this.props.logout}/>
    };
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId,
    image: state.auth.image,
});


export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);