import React, { useCallback, useEffect, useState } from 'react'
import {motion} from 'framer-motion'   
import Sidebar from '../Components/Sidebar'
import TabNavigation from '../Components/TabNavigation'
import { debounce } from 'lodash';
import Loader from '../Components/Loader';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet';

const Search = () => {
  const [search,setSearch] = useState('') 
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [searchData,setSearchData] = useState({})

  const navigate = useNavigate()
  
  const debouncedSearchResult = useCallback(
    debounce(async (search) => {
        if(search){
          try {
            setIsLoading(true)
            const {data} = await axios.get(`https://api.coingecko.com/api/v3/search?query=${search}`)
            setSearchData(data)
            setIsLoading(false)
          } catch (error) {
            setError(error.message)
          }
        }
    }, 500),
    []
  )

  useEffect(()=> {
    debouncedSearchResult(search)
  },[search])


  return (
    <div className='bg-black '>
      {/* desktop dasboard */}
      <div className="flex flex-row min-h-screen bg-black text-gray-800 md:overflow-x-hidden pt-6 md:pt-0">
        <Sidebar active={`search`}/>
        <motion.div 
        intial = {{opacity:0}}
        animate = {{opacity:1}}
        exit = {{opacity:0, transition:{duration: 0.2}}} className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in pl-64 bg-black ">
          {/* search Bar */}
        <div className="p-4">
            <label for="table-search" className="sr-only">Search</label>
            <div className="relative mt-1">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text" id="table-search" className=" border w-full   text-sm rounded-lg  block  pl-10 p-2.5  bg-black border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Search for Cryptocurrency..." onChange={(e) => {
                    setSearch(e.target.value)
                }} />
            </div>
        </div>
        {
          isLoading ? <Loader/> : error ? <p className='text-red-500 text-md'>Something went wrong!</p>
          :
          <ul className='mx-8'>
            {
              (searchData !== undefined) &&
              searchData?.coins?.map((coin,index) => (
                <li onClick={()=> navigate(`/app/coin/${coin.id}`)}  key={index} className="flex items-center text-gray-200 justify-between py-3 border-b-2 border-gray-800 cursor-pointer">
                    <div className="flex items-center justify-start text-sm space-x-3">
                        <img src={coin.large} alt={`${coin.name}`} className="w-7 h-7" />
                        <div className=''>
                            <p className='text-white text-md font-bold '>{coin.name}</p>
                            <p className='text-white text-xs'>{coin.symbol}</p>
                        </div>
                    </div>
                    <div className="">
                        <p className="text-white font-medium">
                            Rank: {coin.market_cap_rank}
                        </p>
                    </div>
                </li>
              ))
            }
          </ul>
        }
        </motion.div>
      </div>
      <TabNavigation/>
    </div>
  )
}

export default Search