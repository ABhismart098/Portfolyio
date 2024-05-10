import {createReducer} from "@reduxjs/toolkit"



const initialState = {
    loading: true,
}

export const userReducer = createReducer({initialState}, {
    "GET_USER_REQUEST": (state) =>{
        state.loading = true;

    },

    "GET_USER_SUCCESS": (state, action) =>{
        state.loading = false;
        state.user = action.payload;
    },

    "GET_USER_FAILURE": (state,action) =>{

        state.loading = false;
        state.error = action.payload;
    },
    "CLEAR_ERRORS": (state) =>{
        state.error = null;
    },
})



export const loginReducer = createReducer(initialState, {
    "LOGIN_REQUEST": (state) => ({
        ...state,
        loading: true,
        isAuthenticated: false,
        error: null // Reset error when login request is made
    }),

    "LOGIN_SUCCESS": (state, action) => ({
        ...state,
        loading: false,
        isAuthenticated: true,
        message: action.payload,
        error: null // Reset error when login is successful
    }),

    "LOGIN_FAILURE": (state, action) => ({
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload,
        message: null // Reset message when login fails
    }),

    "LOAD_USER_REQUEST": (state) => ({
        ...state,
        loading: true,
        isAuthenticated: false,
        error: null // Reset error when loading user request is made
    }),

    "LOAD_USER_SUCCESS": (state, action) => ({
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
        error: null // Reset error when loading user is successful
    }),

    "LOAD_USER_FAILURE": (state, action) => ({
        ...state,
        loading: false,
        isAuthenticated: false,
        error: action.payload,
        user: null // Reset user when loading user fails
    }),

    "LOGOUT_REQUEST": (state) => ({
        ...state,
        loading: true
    }),

    "LOGOUT_SUCCESS": (state, action) => ({
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        message: action.payload,
        error: null // Reset error when logout is successful
    }),

    "LOGOUT_FAILURE": (state, action) => ({
        ...state,
        loading: false,
        isAuthenticated: true,
        error: action.payload
    }),

    "CLEAR_ERRORS": (state) => ({
        ...state,
        error: null
    }),

    "CLEAR_MESSAGE": (state) => ({
        ...state,
        message: null
    })
});



export const updateReducer = createReducer({}, {
    "UPDATE_USER_REQUEST": (state) =>{
        state.loading = true;
    },

    "UPDATE_USER_SUCCESS": (state, action) =>{
        state.loading = false;
        state.message = action.payload;
    },
    "UPDATE_USER_FAILURE": (state,action) =>{

        state.loading = false;
        state.error = action.payload;
    },
    "CLEAR_ERRORS": (state) =>{
        state.error = null;
    },
})


