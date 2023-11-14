import axios from 'axios';

const contactsInstance = axios.create({
    baseURL: `https://653f6df39e8bd3be29e08a4d.mockapi.io/contacts/`,
});

export const storeContacts = async () => {
    const { data } = await contactsInstance.get('/contacts');
    return data;
};

export const addNewContact = async newProduct => {
    const { data } = await contactsInstance.post('/contacts', newProduct);
    return data;
};

export const deleteContact = async productId => {
    const { data } = await contactsInstance.delete(`/contacts/${productId}`);
    return data;
};
