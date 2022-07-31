import s from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/Preloader';
import checkmark from '../../../assets/images/checkmark.png';
import cross from '../../../assets/images/cross.png';
import defualtUserImg from '../../../assets/images/user.png'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.userInfo}>
            <div className={s.userName}>
                {props.profile.fullName}
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.profilePhoto}
                     src={props.profile.photos.large ? props.profile.photos.large : defualtUserImg}/>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>

            <div className={s.userProfileDescription}>
                <div className={s.userAboutMe}>
                    {props.profile.aboutMe}
                </div>
                <div className={s.userJobStatus}>
                    <div className={s.lookingForAJobStatus}>
                        <span>Ищу работу: {props.profile.lookingForAJob ?
                            <img className={s.lookingForAJobStatusImage} src={checkmark}/> :
                            <img className={s.lookingForAJobStatusImage} src={cross}/>}</span>
                    </div>
                    <div className={s.lookingForAJobDescription}>{props.profile.lookingForAJobDescription}</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;