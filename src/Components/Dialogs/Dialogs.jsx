import s from "./Dialogs.module.css";

const setActive = ({isActive}) => (isActive) ? (s.active) : s.dialog
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Dimych
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Andrey
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Viktor
                </div>
                <div className={s.dialog}>
                    Valeriy
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hi, how is your it-kamasutra?</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;