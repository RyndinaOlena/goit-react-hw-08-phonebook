import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { loginThunk } from 'redux/authRedusers'
import { Box, Button, Input, Text } from '@chakra-ui/react';


const LoginPage = () => {
    const basicBoxStyles = {
        // display: 'flex',
        paddingTop: '50px',
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        boxSize: '400px',
        heith: '00px',
        color: 'white',
        textShadow: '0 0 20px black',
        fontWeight: 'bold',
        fontSize: '20px',
        px: 4,
        background:
            'url(https://picsum.photos/id/1080/200/300) center/cover no-repeat',
    }
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
        <Box sx={basicBoxStyles} filter='auto'><form onSubmit={handleSubmit(onSubmit)}>
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

            <Button position={'absolute'} margin={'5'} ml={'150'} display={'block'} type="submit" borderTopRadius="md" >Sign in</Button>
        </form></Box>

    )
}

export default LoginPage
