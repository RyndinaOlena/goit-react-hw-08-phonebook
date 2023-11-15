import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form';
import { registerThuk } from 'redux/authRedusers';
import { Box, Button, FormControl, FormErrorIcon, FormHelperText, FormLabel, Input, Text } from '@chakra-ui/react';
import { Form } from 'react-router-dom';

const RegisterPage = () => {

    const basicBoxStyles = {

        paddingTop: '50px',
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        boxSize: '400px',

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
        dispatch(registerThuk(data))

        reset()
    }


    return (
        <Box textAlign={'center'} sx={basicBoxStyles} filter='auto'>
            <FormControl onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <Text m={2}>Email:</Text>
                    <Input
                        focusBorderColor='gray.400'
                        cursor={'pointer'}
                        size="md"
                        width="240px"
                        variant="filled"

                        placeholder='email'
                        {...register('email', { required: true })}
                        type="email"
                    />
                    {errors.email && (
                        <FormHelperText>This field is required</FormHelperText>
                    )}
                </label>
                <label>
                    <Text>Name:</Text>
                    <Input
                        focusBorderColor='gray.400'
                        cursor={'pointer'}
                        size="md"
                        width="240px"
                        variant="filled"
                        placeholder='name'
                        {...register('name', { required: true })}
                        type="text"
                    />
                    {errors.name && <span>This field is required</span>}
                </label>
                <label>
                    <Text>Password:</Text>
                    <Input
                        focusBorderColor='gray.400'
                        cursor={'pointer'}
                        size="md"
                        width="240px"
                        variant="filled"
                        placeholder='name'
                        {...register('password', { required: true })}
                        type="password"
                    />
                    {errors.password && <span>This field is required</span>}
                </label>

                <Button position={'absolute'} margin={'5'} ml={'150'} display={'block'} type="submit" borderTopRadius="md">
                    Sign Up
                </Button>
            </FormControl>
        </Box>
    )
}

export default RegisterPage
