import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addContact, fetchContacts } from 'redux/phoneBookReduser'
import css from './style.module.css'
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
        <div> <h2>Phonebook</h2>
            <form onSubmit={handleAddContact}>
                <label>
                    <span>Name</span>
                    <input className={css.list} type="text" name="name" />
                </label>
                <label>
                    <span>Number</span>
                    <input className={css.list} type="tel" name="number" required />
                </label>
                <button className={css.btnAdd} type='submit'>Add contact</button>
            </form>

        </div>
    )
}

export default Form
