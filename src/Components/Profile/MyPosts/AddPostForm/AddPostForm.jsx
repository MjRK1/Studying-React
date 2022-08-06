import {useForm} from "react-hook-form";
import s from "../MyPosts.module.css";
import {ErrorMessage} from "@hookform/error-message";
import React from "react";

const AddPostForm = (props) => {
    const {
        register,
        watch,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        criteriaMode: "all"
    })
    const addPost = () => {
        props.addPost()
        reset()
    }
    const onPostChange = () => {
        props.onPostchange(watch("newPostBody"))
    }
    return (
        <form onSubmit={handleSubmit(addPost)} onChange={handleSubmit(onPostChange)}>
            <div className={s.addPost}>
                <input placeholder={"Your post..."} {...register("newPostBody",
                    {
                        required: "This is required",
                        maxLength: {
                            value: 100,
                            message: 'Max length is 100'
                        }
                    }
                )}
                       className={s.textArea}/>
                <div className={s.buttonBlock}>
                    {!errors.newPostBody
                        ? <button className={errors.newPostBody ? s.withoutPostButton : s.addPostButton}>Add Post
                        </button>
                        : <ErrorMessage
                            errors={errors}
                            name="newPostBody"
                            render={({messages}) => {
                                return messages
                                    ? Object.entries(messages).map(([type, message]) => (
                                        <div className={s.errorMessage} key={type}>{message}</div>
                                    )): null
                            }}
                        />}
                </div>

            </div>
        </form>
    )
}
export default AddPostForm