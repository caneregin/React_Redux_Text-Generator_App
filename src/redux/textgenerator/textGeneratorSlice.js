import { createSlice } from "@reduxjs/toolkit";

export const textGeneratorSlice = createSlice({
    name: "textGenerator",
    initialState: {
        randomText: ""
    },
    reducers: {
        changeParas: (state, action) => {
            state.randomText = action.payload
        }
    }
})
export const { changeParas } = textGeneratorSlice.actions
export default textGeneratorSlice.reducer