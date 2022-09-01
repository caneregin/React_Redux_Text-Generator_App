import { configureStore } from "@reduxjs/toolkit";
import textGeneratorSlice from "./textgenerator/textGeneratorSlice";

export const store = configureStore({
    reducer:{
        textGenerator: textGeneratorSlice
    },
})