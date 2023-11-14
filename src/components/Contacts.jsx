import React from 'react'
import Form from './ContactForm'
import Filter from './Filter'
import ContactList from './ContactsList'

const Contacts = () => {
    return (
        <div>
            <Form />
            <Filter />
            <ContactList />
        </div>
    )
}

export default Contacts
