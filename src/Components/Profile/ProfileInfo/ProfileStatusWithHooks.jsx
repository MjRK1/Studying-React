import Preloader from "../../common/preloader/Preloader";
import s from "./ProfileInfo.module.css";
import defaultUserImg from "../../../assets/images/user.png";
import React, {useEffect, useState} from 'react'

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "-----"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} value={status} onBlur={deactivateEditMode}/>
                </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks