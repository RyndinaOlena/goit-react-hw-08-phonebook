import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form';
import { registerThuk } from 'redux/authRedusers';
import { FormHelperText, FormLabel, Input } from '@chakra-ui/react';

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
                <FormLabel>Email:</FormLabel>
                <Input
                    size="md"
                    width="240px"
                    variant="filled"
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
                    size="md"
                    width="240px"
                    variant="filled"
                    {...register('name', { required: true })}
                    type="text"
                />
                {errors.name && <span>This field is required</span>}
            </label>
            <label>
                <FormLabel>Password:</FormLabel>
                <Input
                    size="md"
                    width="240px"
                    variant="filled"
                    {...register('password', { required: true })}
                    type="password"
                />
                {errors.password && <span>This field is required</span>}
            </label>

            <button type="submit">
                Sign Up
            </button>
        </form>
    )
}

export default RegisterPage
