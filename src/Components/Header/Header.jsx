import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logoName}>
                <div className ={s.name}>Sidorenko</div>
            </div>

        </header>
    );
}
export default Header;