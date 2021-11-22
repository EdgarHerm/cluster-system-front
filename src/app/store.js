import { configureStore } from '@reduxjs/toolkit';
import ReducerUser from '../reducers/ReducerUser';

export const store = configureStore({
    reducer: {
        user: ReducerUser,
    }
});