import { createSlice } from "@reduxjs/toolkit";

export const CATEGORY_INITIAL_STATE = {
    categories: []
}

const categorySlice = createSlice({
    name: 'categories',
    initialState: CATEGORY_INITIAL_STATE,
    reducers: {
        setCategories(state, action) {
            state.categories = action.payload
        }
    }
})

export const { setCategories } = categorySlice.actions;
export const categoriesReducer = categorySlice.reducer


// export const categoriesReducerOld = (state = CATEGORY_INITIAL_STATE, action) => {
//     const { type, payload } = action;
//     switch (type) {
//         case CATEGORY_ACTION_TYPES.SET_CATEGORIES:
//             return {
//                 ...state, categories: payload
//             }

//         default:
//             return {
//                 ...state
//             }

//     }
// }