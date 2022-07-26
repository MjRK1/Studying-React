import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import checkmark from '../../assets/images/checkmark.png';
import cross from '../../assets/images/cross.png';

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile = {props.profile}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;