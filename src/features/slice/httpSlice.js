// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// https://redux-toolkit.js.org/rtk-query/overview

// Define our single API slice object
export const httpSlice = createApi({
  // The cache reducer expects to be added at `state.http` (already default - this is optional)
  reducerPath: 'http',
  // All of our requests will have URLs starting with '/api'
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  // The "endpoints" represent operations and requests for this server
  endpoints: builder => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getBlockByIdAndType: builder.query({
      // The URL for the request is '/api/block'
      query: ({block_id, type, sort}) => ({
        url: '/block',
        method: 'POST',
        body: {
          block_id,
          type,
          sort
        }
      }),
    })
  })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetBlockByIdAndTypeQuery } = httpSlice