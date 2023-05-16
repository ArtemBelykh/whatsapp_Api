import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ApiUrl} from "../settings";

export const sendMessageApi = createApi({
    reducerPath: "sendMessageApi",
    tagTypes: ['getAll'],
    baseQuery: fetchBaseQuery({
        baseUrl: ApiUrl
    }),
    endpoints: (build) => ({
        sendMessage: build.mutation<any, any>({
            query: (body) => (
                {
                    url: `/SendMessage/${localStorage.getItem('apiTokenInstance')}`,
                    method: "POST",
                    body
                }

            ),
            invalidatesTags: ['getAll']
        })
    })

})

export const {useSendMessageMutation} = sendMessageApi;