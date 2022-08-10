import {useForm} from "react-hook-form"
import s from "./Login.module.css"
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {ErrorMessage} from "@hookform/error-message";
import {Navigate} from "react-router-dom"

const LoginForm = (props) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
        setError,
        clearErrors
    } = useForm({
        criteriaMode: "all",
    });
    const onSubmit = formData => {
        props.login(formData.email, formData.password, formData.rememberMe, setError);
        reset();
    }
    console.log(errors)
    return (
        <form className={s.loginForm} onSubmit={handleSubmit(onSubmit)} onError={handleSubmit(onSubmit)}>
            <div className={s.loginField}>
                <input className={(!errors?.email || !errors?.common) ? s.loginFieldItem : s.withErrorLoginFieldItem}
                       placeholder={"Email"} {...(register("email", {
                        required: 'This is required field!',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Wrong email address'
                        }
                    }
                ))}/>
                <div>
                    <ErrorMessage
                        errors={errors}
                        name="email"
                        render={({messages}) => {
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                    <div className={s.errorMessage} key={type}>{message}</div>
                                )) : null
                        }
                        }
                    /></div>
            </div>

            <div className={s.loginField}>
                <input type={"password"}
                       className={(!errors?.password || !errors?.common) ? s.loginFieldItem : s.withErrorLoginFieldItem}
                       placeholder={"Password"} {...register("password", {
                    required: 'This is required field!'
                })}/>
                {errors?.password && <div className={s.errorMessage}>{errors?.password.message}</div>}

            </div>
            {errors?.common && <div className={s.errorMessage}>{errors?.common.message}</div>}
            <label className={s.rememberMeBlock}>
                <input className={s.checkbox} {...register("rememberMe")} type="checkbox"/> <span
                className={s.rememberMeText}>Remember me</span>
            </label>
            <div className={s.buttonBlock}>
                {!errors?.password ? <button type={"submit"} onClick={() => {clearErrors('common')}} className={s.loginButton}>Login</button>
                    : <button className={s.withErrorLoginButton} disabled={true}>Login</button>}
            </div>
        </form>
    )
}
const Login = (props) => {
    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }
    return <div className={s.loginPage}>
        <div className={s.loginFormBlock}>
            <h1 className={s.loginFormTitle}>Login</h1>
            <LoginForm login={props.login}/>
        </div>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {login})(Login);