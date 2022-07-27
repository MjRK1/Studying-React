import Header from "./Header";
import React from 'react'
import * as axios from "axios";
import {connect} from "react-redux";
import {getAuthUserAvatar, setAuthUserData} from "../../redux/auth-reducer";
import {setUserProfile} from "../../redux/profile-reducer";
import {headerAPI, profileAPI} from "../../api/api";

class HeaderContainer extends React.Component {
    componentDidMount() {
        headerAPI.getAuthUserData().then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    this.props.setAuthUserData(id, email, login);
                    profileAPI.getUserProfile(this.props.userId)
                        .then(data => {
                            this.props.getAuthUserAvatar(data.photos.small);
                            this.props.setUserProfile(data);
                        });
                }
            });
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


export default connect(mapStateToProps, {setAuthUserData, getAuthUserAvatar,setUserProfile})(HeaderContainer);