import {useEffect} from 'react'
import {SubmitHandler,useForm} from "react-hook-form"
import {ILoginFields} from "./login.interface";

const LoginForm = (props) => {
    const {register,
        handleSubmit,
        watch,
        formState: {errors},
        reset,
        setValue
    } = useForm<ILoginFields>({
        mode: 'onChange',
    });
    const onSubmit:SubmitHandler<ILoginFields> = data => {
        alert(`Your name ${data.login}`);
        reset();
    }
    useEffect(() => {
        const subscription = watch((value, {name, type}) =>
            console.log(value, name, type)
        )
        return () => subscription.unsubscribe()
    }, [watch])
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input placeholder={"Login"} {...(register("login", {
                        required: 'Введите логин!',
                    }
                ))}/>
            </div>
            {errors?.login && <div style={{color:'red'}}>{errors.login.message}</div>}
            <div>
                <input placeholder={"Password"} {...register("password")}/>
            </div>
            <div>
                <input type={"checkbox"} {...register("isRemembered")}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const Login = (props) => {
    return <div>
        <h1>Login</h1>
        <LoginForm/>
    </div>
}

export default Login;