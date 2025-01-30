
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Country } from '../types/allcountries'



export const allcountriesApi = createApi({
  reducerPath: 'allcountriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/' }),
  endpoints: (builder) => ({
    getAllCountries: builder.query<any, void>({
      query: () => ({
        url  : "all",
        method: "GET"
    })
    }),
    getCountryById: builder.query<Country, { name: { common: string } }>({
      query: (queryArg) => ({
        url: `name/${queryArg.name.common}`,
        method: "GET",
      }),
    }),
  }),
})


export const {useGetAllCountriesQuery, useGetCountryByIdQuery } = allcountriesApi;