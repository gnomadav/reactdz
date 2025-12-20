import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    companyName: "",
    clients: [],
    loadState: 0,
    error: null
};

const red1 = createSlice({
    name: "clients",
    initialState,
    reducers: {
        updateLoadState(state, action) {
            state.loadState = action.payload.state;
            state.error = action.payload.error;
        },
        setCompanyData(state, action) {
            state.companyName = action.payload.companyName;
            state.clients = action.payload.clientsArr;
        },
        addClient(state, action) {
            state.clients = [...state.clients, action.payload];
        },
        deleteClient(state, action) {
            state.clients = state.clients.filter(c => c.id !== action.payload);
        },
        updateClient(state, action) {
            state.clients = state.clients.map(c =>
                c.id === action.payload.id ? { ...c, ...action.payload } : c
            );
        },
    },
});

export const { updateLoadState, setCompanyData, addClient, deleteClient, updateClient } = red1.actions;

export async function loadCompanyThunk(dispatch) {
    try {
        dispatch(updateLoadState({ state: 1, error: null }));
        const response = await fetch("https://fe.it-academy.by/Examples/mobile_company.json");
        if (response.ok) {
            const data = await response.json();
            dispatch(updateLoadState({ state: 2, error: null }));
            dispatch(setCompanyData(data));
        }
        else {
            dispatch(updateLoadState({ state: 3, error: "HTTP error " + response.status }));
        }
    }
    catch (err) {
        dispatch(updateLoadState({ state: 3, error: err.message }));
    }
}

export default red1.reducer;