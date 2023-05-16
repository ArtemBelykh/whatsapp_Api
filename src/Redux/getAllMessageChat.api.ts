import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ApiUrl} from "../settings";

export const getAllMessageChatApi = createApi({
    reducerPath: "getAllMessageChatApi",
    tagTypes: ['getAll'],
    baseQuery: fetchBaseQuery({
        baseUrl: ApiUrl
    }),
    endpoints: (build) => ({
        getMessage: build.query<any, string>({
            query: (body) => (
                {
                    url: `/GetChatHistory/${localStorage.getItem('apiTokenInstance')}`,
                    method: "POST",
                    body
                }
            ),
            providesTags: ['getAll']
        })
    })

})

export const {useGetMessageQuery} = getAllMessageChatApi;