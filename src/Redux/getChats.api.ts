import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ApiUrl} from "../settings";

// export const ApiUrl: string = 'https://api.green-api.com/waInstance1101820940/ReceiveNotification'
export const getChatsApi = createApi({
    reducerPath: "getChatsApi",
    tagTypes: ['getChats'],
    baseQuery: fetchBaseQuery({
        baseUrl: ApiUrl
    }),
    endpoints: (build) => ({
        getChats: build.query<any, void>({
            query: () => `ReceiveNotification/${localStorage.getItem('apiTokenInstance')}`,
            providesTags: ['getChats']
        }),

    }),


})

export const {useGetChatsQuery} = getChatsApi;