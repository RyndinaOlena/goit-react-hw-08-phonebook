
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { addNewContact, deleteContact, storeContacts } from "./get_api";
export const fetchContacts = createAsyncThunk(
    `contacts/getAll`,
    async (_, thunkAPI) => {
        try {
            const contacts = await storeContacts();

            return contacts;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    `contacts/addContact`,
    async (newContact, thunkAPI) => {
        try {
            const contacts = await addNewContact(newContact);

            return contacts;
        } catch (error) {
            return thunkAPI.requestDeleteContact(error.message);
        }
    }
);

export const deleteContacts = createAsyncThunk(
    `contacts/deleteContact`,
    async (contactId, thunkAPI) => {
        try {
            const deleteContacts = await deleteContact(contactId);

            return deleteContacts;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const INITIAL_STATE = {
    contacts: {
        items: [],
        isLoading: false,
        error: null,
    },
    filter: '',
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: INITIAL_STATE,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
    extraReducers: builder =>
        builder
            .addCase(fetchContacts.pending, state => {
                state.contacts.isLoading = true;
                state.contacts.error = null;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.items = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error = action.payload;
            })

            .addCase(addContact.pending, state => {
                state.contacts.isLoading = true;
                state.contacts.error = null;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.items = [action.payload, ...state.contacts.items];
            })
            .addCase(addContact.rejected, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error = action.payload;
            })

            .addCase(deleteContacts.pending, state => {
                state.contacts.isLoading = true;
                state.contacts.error = null;
            })
            .addCase(deleteContacts.fulfilled, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.items = state.contacts.items.filter(
                    contact => contact.id !== action.payload.id
                );
            })
            .addCase(deleteContacts.rejected, (state, action) => {
                state.contacts.isLoading = false;
                state.contacts.error = action.payload;
            }),
});

export const { setFilter } = contactsSlice.actions;
export const phoneBookReducer = contactsSlice.reducer;