import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form';
import { registerThuk } from 'redux/authRedusers';
import { Button, FormHelperText, FormLabel, Input } from '@chakra-ui/react';

const RegisterPage = () => {
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

        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <FormLabel m={2}>Email:</FormLabel>
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
                <FormLabel>Name:</FormLabel>
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
                <FormLabel>Password:</FormLabel>
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

            <Button display={'block'} ml={4} mt={2} type="submit" borderTopRadius="md">
                Sign Up
            </Button>
        </form>
    )
}

export default RegisterPage
