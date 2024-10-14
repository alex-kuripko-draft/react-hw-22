import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
    quote: '',
    author: '',
    status: 'idle',
    error: false,
};

export const fetchRandomQuote = createAsyncThunk(
    'quote/fetchRandomQuote',
    async () => {
        const response = await axios.get('http://api.quotable.io/random');
        return response.data;
    },
);

const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRandomQuote.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRandomQuote.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.quote = action.payload.content;
                state.author = action.payload.author;
            })
            .addCase(fetchRandomQuote.rejected, (state) => {
                state.status = 'failed';
                state.error = true;
            });
    },
});

export default quoteSlice.reducer;