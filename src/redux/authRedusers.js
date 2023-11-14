import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { requestLogOut, requestLogin, requestRegister, requestUserCurrent, setToken } from "../services/apiAuth"


export const registerThuk = createAsyncThunk(
    'auth/register',
    async (formData, thunkAPI) => {
        try {
            const authData = await requestRegister(formData);
            console.log(authData)
            return authData;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const loginThunk = createAsyncThunk('auth/login',
    async (formData, thunkAPI) => {
        try {
            const response = await requestLogin(formData)
            console.log(response)
            return response

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    })

export const refreshThunk = createAsyncThunk('auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState()
        const token = state.auth.token
        try {
            setToken(token)
            const authData = await requestUserCurrent()
            console.log(authData)
            return authData

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }, {
    condition: (_, thunkApi) => {
        const state = thunkApi.getState()
        const token = state.auth.token;
        if (!token) return false;
        return true;

    }
})
export const requestLogOutThuk = createAsyncThunk('auth/logout',
    async (formData, thunkAPI) => {
        try {
            await requestLogOut(formData)

            return
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    })



const INISIAL_STATE = {
    token: null,
    user: {
        email: null,
        name: null,
    },
    authenticated: false,
    isLoading: false,
    error: null,
}

const userLoginSlice = createSlice({
    name: 'auth',
    initialState: INISIAL_STATE,
    extraReducers: builder =>
        builder
            .addCase(registerThuk.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerThuk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.authenticated = true;
                state.token = action.payload.token;
                state.user = action.payload.user
            })
            .addCase(registerThuk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            //----------Login------
            .addCase(loginThunk.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.authenticated = true;
                state.token = action.payload.token;
                state.user = action.payload.user
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            //--------Refresh------
            .addCase(refreshThunk.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(refreshThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.authenticated = true;
                state.user = action.payload
            })
            .addCase(refreshThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            //-----------logOut-----------
            .addCase(requestLogOutThuk.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(requestLogOutThuk.fulfilled, (state, action) => {
                return INISIAL_STATE
            })
            .addCase(requestLogOutThuk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
})

export const authReducer = userLoginSlice.reducer