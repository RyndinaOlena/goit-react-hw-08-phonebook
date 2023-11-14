import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { loginThunk } from 'redux/authRedusers'

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()

    const dispatch = useDispatch()
    const onSubmit = (data) => {
        dispatch(loginThunk(data))
        reset()
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <span>email</span>
                <input {...register("email", { required: true })} type='email' />
                {errors.email && <span> This field is required </span>}
            </label>
            <label>
                <span>password</span>
                <input {...register("password", { required: true, maxLength: 8 })} type='password' />
                {errors.password && <span> This field is required </span>}
            </label>

            <button type='submit'>Sign in</button>
        </form>
    )
}

export default LoginPage
