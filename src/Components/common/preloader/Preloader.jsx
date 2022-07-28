import preloader from "../../../assets/images/preloader.svg";
import React from "react";
import s from "./preloader.module.css"


let Preloader = (props) => {
    return <div className={s.preloader}>
        <img src={preloader}/>
    </div>
}

export default Preloader