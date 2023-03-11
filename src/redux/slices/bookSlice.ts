import { createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { BooksModel } from "../../models/booksModel";
import { RootState } from "../store";

const bookSlice = createSlice({
    name: 'bookSlice',
    initialState: {
        books:[] as BooksModel[],
        book:{} as BooksModel,
        searchResultBooks:[] as BooksModel[] 
    },
    reducers: {
        getAllBooks(state, action) {
            state.books = action.payload;
        },
        updateBook(state, action) {
            state.books = action.payload;

        },
        searchBooks(state, action) {
            state.searchResultBooks = action.payload;
        },
        getBook(state, action) {
            state.book = action.payload;
        },
    }
})
export default bookSlice.reducer;

export const bookAction = bookSlice.actions;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;