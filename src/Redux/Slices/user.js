import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Axios
import { axiosClient } from "../../utils/axios/axios";

export const getRegisterUser = createAsyncThunk(
    "/api/v1/auth/register",
    async (body) => {
        try {
            const response = await axiosClient.post(
                "https://localhost:4000/api/v1/auth/register",
                body,
            );
            console.log(response);
            return response.data;
        } catch (e) {
            return Promise.reject(e);
        }
    }
);

export const getLoggedInrUser = createAsyncThunk(
    "/api/v1/auth/login",
    async (body) => {
        try {
            const response = await axiosClient.post("/api/v1/auth/login", body);
            console.log("This is Loggin Data", response);
            return response.data;
        } catch (e) {
            return Promise.reject(e);
        }
    }
);

// User Slice
const userSlice = createSlice({
    name: "user",
    initialState: {
        status: false,
        user: {},
        isAuthenticated: false,
        error: null,
    },

    extraReducers: (builder) => {
        builder
            .addCase(getRegisterUser.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.user = action.payload.user;
                    state.isAuthenticated = true;
                    state.status = true;
                } else {
                    state.error = action.payload.message;
                    state.status = false;
                }
            })
            .addCase(getLoggedInrUser.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.user = action.payload.user;
                    state.isAuthenticated = true;
                    state.status = true;
                    state.error = null;
                } else {
                    state.error = action.payload.message;
                    state.status = false;
                }
            })
    },
});

const userReducer = userSlice.reducer;
export default userReducer;
