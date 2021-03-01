import { createSlice } from '@reduxjs/toolkit';
import { fetchByCountry } from '../../services/covid-stats';

const initialState = {
    collection: null,
    uniqCountries: null,
    loading: false,
    error: false,
};

const covidStatsSlice = createSlice({
    name: 'covidStatsReducer',
    initialState,
    reducers: {
        setCollection(state, action) {
            state.collection = action.payload;
            state.loading = false;
        },
        setUniqCountries(state, action) {
            state.uniqCountries = action.payload;
            state.loading = false;
        },
        setError(state, action) {
            state.loading = false;
            state.error = true;
            state.errorMessage = action.payload;
        },
        setLoading(state) {
            state.loading = true;
        },
        destroy(state) {
            /* Destroying old state */ 
            state = initialState;
        },
    },
});

/* Extract the action creators object and the reducer */ 
const { actions, reducer } = covidStatsSlice;
/* Extract and export each action creator by name */ 
export const {
    setCollection,
    setUniqCountries,
    setError,
    setLoading,
    destroy
} = actions;

/* Export the reducer, either as a default or named export */ 
export default reducer;

export const fetch = ({ country }) => async (dispatch, getState) => {
    dispatch(setLoading());
    try {
        const [payload, payloadCountries] = await Promise.all([
            fetchByCountry({ country }),
        ])
        dispatch(setUniqCountries(payloadCountries));
        dispatch(setCollection(payload));
    } catch (e) {
        dispatch(setError(e));
    }
};


