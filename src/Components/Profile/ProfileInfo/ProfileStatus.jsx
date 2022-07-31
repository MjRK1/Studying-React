import Preloader from "../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css";
import defaultUserImg from "../../../assets/images/user.png";
import React from 'react'
class ProfileStatus extends React.Component {
    /*if (!props.profile) {
        return <Preloader/>
    }*/
    state = {
        editMode: false,
    }
    activateEditMod = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMod = () => {
        this.setState({
            editMode: false
        })
    }



    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMod}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMod} value={this.props.status}/>
                    </div>
                }
            </div>
        );
    }
}
export default ProfileStatus