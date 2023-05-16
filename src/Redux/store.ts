import {configureStore} from "@reduxjs/toolkit";
import {getChatsApi} from "./getChats.api";
import {getAllMessageChatApi} from "./getAllMessageChat.api";
import {sendMessageApi} from "./sendMessage.api";

export const store = configureStore({
    reducer: {
        [getChatsApi.reducerPath]: getChatsApi.reducer,
        [getAllMessageChatApi.reducerPath]: getAllMessageChatApi.reducer,
        [sendMessageApi.reducerPath]: sendMessageApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(getChatsApi.middleware, getAllMessageChatApi.middleware, sendMessageApi.middleware)
})