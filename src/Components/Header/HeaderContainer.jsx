import Header from "./Header";
import React from 'react'
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData(this.props.userId)
    }

    render() {
        return <Header {...this.props}/>
    };
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId,
    image: state.auth.image,
});


export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);