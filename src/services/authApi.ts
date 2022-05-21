import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_URL || "http://localhost:5000",
    headers:{
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, PUT, POST, PATCH, DELETE",
    }
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body: { email: string; password: string }) => {
          console.log("w fetch ", body)
        return {
          url: "/login",
          method: "post",
          body,
        };
      },
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
