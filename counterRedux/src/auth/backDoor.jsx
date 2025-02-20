import {configurebackDoor} from "@reduxjs/toolkit";
import inputLogin from "./Login";

export const backDoor = configurebackDoor({
    input:{
        input: inputLogin,
    }
})