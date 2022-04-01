import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseUrl = "https://api.coingecko.com/api/v3/coins"

export const coinsDataApi = createApi({
    reducerPath: "coinsData",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCoinsData: builder.query({
            query: ({currency,page}) => `/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&page=${page}&sparkline=false`
        }),
        getCoinData: builder.query({
            query:(id) => `/${id}`
        }),
        getHistoricalData: builder.query({
            query:(options) => `/${options.id}/ohlc?vs_currency=usd&days=${options.chartDays}`,
        }),
        // getWatchlistData: builder.query({
        //     query: async (WatchlistIds, _queryApi, _extraOptions, baseQuery) => {
        //         const results = await Promise.all(WatchlistIds.map(WatchlistId => baseQuery(`/${WatchlistId}`)));

        //         const merged = [].concat(...results.map(result => result.data));
        //         const errors = [].concat(...results.filter(result => result.error != null).map(result => result.error));

        //         if (errors.length > 0)
        //             return { error: errors };

        //         return { data: merged };
        //     }
        // })
    })
})
 
export const {useGetCoinsDataQuery,useGetCoinDataQuery,useGetHistoricalDataQuery} = coinsDataApi