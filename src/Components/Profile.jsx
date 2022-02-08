import s from'./Profile.module.css'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className = 'content-background' src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" alt=""/>
            </div>
            <div>
                ava+description
            </div>
            <div>
                My Posts
                <div>
                    New Posts
                </div>
                <div className = 'posts'>
                    <div className = {s.item}>
                        Post1
                    </div>
                    <div className = {s.item}>
                        Post2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;