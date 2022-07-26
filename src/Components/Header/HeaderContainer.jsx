import Header from "./Header";
import React from 'react'
import * as axios from "axios";
import {connect} from "react-redux";
import {getAuthUserAvatar, setAuthUserData} from "../../redux/auth-reducer";
import {setUserProfile} from "../../redux/profile-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        })
            .then(response => {
                debugger;
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + this.props.userId)
                        .then(response => {
                            this.props.getAuthUserAvatar(response.data.photos.small);
                            this.props.setUserProfile(response.data);
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