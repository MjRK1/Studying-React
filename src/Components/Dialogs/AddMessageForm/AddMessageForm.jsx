import {useForm} from "react-hook-form";
import s from "../Dialogs.module.css";
import React from "react";
import {ErrorMessage} from "@hookform/error-message";

const AddMessageForm = (props) => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: {errors}
    } = useForm({
        criteriaMode: "all"
    });
    const onSubmit = () => {
        props.sendMessage();
        reset();
    }
    const onChange = () => {
        props.updateNewMessageBody(watch("newMessageBody"));
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} onChange={handleSubmit(onChange)}>
            <div className={s.addMessage}>
                <input type="textarea" placeholder={"Your message"} {...register("newMessageBody",
                    {
                        required: "This is required field",
                    })} className={s.textArea}/>
                <div className={s.buttonBlock}>
                    {!errors?.newMessageBody
                        ? <button
                            className={errors?.newMessageBody ? s.withoutSendMessageButton : s.sendMessageButton}
                        >Send Message</button>
                        : <ErrorMessage
                            errors={errors}
                            name="newMessageBody"
                            render={({message}) => <div className={s.errorMessage}>{message}</div>}
                        />}
                </div>
            </div>
        </form>
    )
}
export default AddMessageForm