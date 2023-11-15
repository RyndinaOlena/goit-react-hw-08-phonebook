import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { loginThunk } from 'redux/authRedusers'
import { Button, Input, Text } from '@chakra-ui/react';


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
                <Text m={2} >email</Text>
                <Input
                    focusBorderColor='gray.400'
                    cursor={'pointer'}
                    width='auto'
                    variant="filled"
                    placeholder='email'
                    {...register("email", { required: true })} type='email' />
                {errors.email && <span> This field is required </span>}
            </label>
            <label>
                <Text m={2}>password</Text>
                <Input
                    focusBorderColor='gray.400'
                    cursor={'pointer'}
                    width='auto'
                    variant="filled"
                    placeholder='password'
                    {...register("password", { required: true, maxLength: 8 })} type='password' />
                {errors.password && <span> This field is required </span>}
            </label>

            <Button display={'block'} ml={4} mt={2} type='submit'>Sign in</Button>
        </form>
    )
}

export default LoginPage
