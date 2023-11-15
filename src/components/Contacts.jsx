import React from 'react'
import Form from './ContactForm'
import Filter from './Filter'
import ContactList from './ContactsList'
import { Box } from '@chakra-ui/react'

const Contacts = () => {
    const basicBoxStyles = {
        // display: 'flex',
        // paddingTop: '50px',
        // margin: 'auto',
        // alignItems: 'center',
        // justifyContent: 'center',
        // textAlign: 'center',
        boxSize: '400',
        heith: '00px',
        color: 'white',
        textShadow: '0 0 5px black',
        fontWeight: 'bold',
        fontSize: '20px',
        px: 4,
        background:
            'url() center/cover no-repeat',
    }
    return (
        <Box sx={basicBoxStyles} filter='auto'>
            <Form />
            <Filter />
            <ContactList />
        </Box>
    )
}

export default Contacts
