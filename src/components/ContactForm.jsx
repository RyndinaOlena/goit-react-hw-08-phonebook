import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addContact, fetchContacts } from 'redux/phoneBookReduser'
import css from './style.module.css'
import { Button, Input, Text } from '@chakra-ui/react'
const Form = () => {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    const handleAddContact = (event) => {
        event.preventDefault()
        const name = event.currentTarget.elements.name.value;
        const number = event.currentTarget.elements.number.value;

        const newContact = {
            name,
            number,
        };
        dispatch(addContact(newContact));

        event.currentTarget.reset();
    }
    return (
        <div> <Text m={4} fontSize='4xl' fontWeight={700}>Phonebook</Text>
            <form onSubmit={handleAddContact}>
                <label>
                    <Text>Name</Text>
                    <Input
                        size="md"
                        width="240px"
                        variant="filled"
                        className={css.list} type="text" name="name" />
                </label>
                <label>
                    <Text>Number</Text>
                    <Input
                        size="md"
                        width="240px"
                        variant="filled"
                        className={css.list} type="tel" name="number" required />
                </label>
                <Button className={css.btnAdd} type='submit'>Add contact</Button>
            </form>

        </div >
    )
}

export default Form
