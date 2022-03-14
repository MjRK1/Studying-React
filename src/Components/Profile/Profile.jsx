import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img  src="https://s1.1zoom.ru/big0/210/Sea_Tropics_Palma_Beach_494707.jpg" alt=""/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;