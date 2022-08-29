import { createSlice } from "@reduxjs/toolkit";
 
const initialColorValue = ""
export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value: initialColorValue
    },
    reducers: { 
        changeColor: (state, action) => {
            state.value = action.payload;
        },
    }
})

export const { changeColor } = themeSlice.actions;
export default themeSlice.reducer;