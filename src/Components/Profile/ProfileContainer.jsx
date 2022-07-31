import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserStatus, setUserProfile, updateUserStatus} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        this.props.setUserProfile(userId);
       // setTimeout(() => {
            this.props.getUserStatus(userId);
       // }, 1000)
    }

    render() {
        return (
            <Profile {...this.props} status = {this.props.status} updateUserStatus={this.props.updateUserStatus}/>
        );
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
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

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})


export default  compose(
    connect(mapStateToProps, {setUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)
