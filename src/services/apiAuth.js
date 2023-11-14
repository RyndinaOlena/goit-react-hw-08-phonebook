import axios from 'axios'

const phoneBookinstance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
});


export const setToken = (token) => {
    phoneBookinstance.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const requestRegister = async (formData) => {
    const { data } = await phoneBookinstance.post('/users/signup', formData)
    console.log(data)
    setToken(data.token)
    return data
}


export const requestLogin = async (formData) => {
    const { data } = await phoneBookinstance.post('/users/login', formData)
    setToken(data.token)
    return data
}

export const requestLogOut = async () => {
    const { data } = await phoneBookinstance.post('/users/logout')
    return data
}

export const requestUserCurrent = async () => {
    const { data } = await phoneBookinstance.get('/users/current')
    return data
}


//----------contactsApi--------
export const storeContacts = async () => {
    const { data } = await phoneBookinstance.get('/contacts')

    console.log(data)
    return data

}

export const addNewContact = async (newContact) => {
    const { data } = await phoneBookinstance.post('/contacts', newContact)

    return data

}
export const deleteContact = async (contactId) => {
    const { data } = await phoneBookinstance.delete(`/contacts/${contactId}`)

    return data
}