import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from './quote/slice';

export const store = configureStore({
    reducer: {
        quote: quoteReducer,
    },
});