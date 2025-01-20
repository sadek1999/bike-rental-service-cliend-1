// Need to use the React-specific entry point to import createApi
import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  DefinitionType,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { logout } from "../features/auth/authSlice";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5001/api/",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `${token}`);
    }

    return headers;
  },
});

const baseQueryWithAccessToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  // Attempt the initial request
  let result = await baseQuery(args, api, extraOptions);

  // Handle errors
  if (result?.error?.status === 404) {
    toast.error(result.error.data.message || "Resource not found");
  }

  if (result?.error?.status === 403) {
    toast.error(result.error.data.message || "Forbidden");
  }

  if (result?.error?.status === 401) {
    //* Access token has expired or is invalid
    toast.error("Session expired. Please log in again.");

    // Logout the user and redirect to the login page
    api.dispatch(logout());

    // Optional: Redirect to login page
    window.location.href = "/login";
  }

  return result;
};

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",

  baseQuery: baseQueryWithAccessToken,
  tagTypes: ['bikes'],
  endpoints: () => ({}),
});
