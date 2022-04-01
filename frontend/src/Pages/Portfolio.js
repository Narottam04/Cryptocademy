import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Loader from '../Components/Loader'
import Sidebar from '../Components/Sidebar'
import TabNavigation from '../Components/TabNavigation'
import { useAuth } from '../Context/AuthContext'
import { updatePortfolio } from '../Features/portfolioDataSlice'
import { useGetPortfolioData } from '../services/supabaseApi'
import { supabase } from '../Utils/init-supabase'

const Portfolio = () => {
  const {currentUser} = useAuth() 
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const portfolioData = useSelector(state=> state.portfolioData)
  // const portfolioData = useGetPortfolioData()

  // if(portfolioData) {
  //   console.log(portfolioData)
  // }
  console.log(portfolioData)
  useEffect(() => {
    async function portfolioData (){
      let { data: portfolio, error } = await supabase
      .from('portfolio')
      .select(`
          coinId,
          coinSymbol,
          coinName,
          image,
          amount,
          coinAmount
      `)
      .eq('userId',`${currentUser.uid}`)

      if(error) {
        console.log(error)
        return
      }

      if(portfolio) {
        dispatch(updatePortfolio(portfolio))
      }
    }

    portfolioData()
  }, [])
  

  return (
    <div className='bg-black'>
      {/* desktop dasboard */}
      <div className="flex flex-row min-h-screen bg-black text-gray-800 md:overflow-x-hidden">
        <Sidebar/>
        <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in pl-64 bg-black ">
          <p className='text-white font-bold text-2xl md:text-3xl font-title my-4 ml-3'>Portfolio</p>
            
          <ul className="md:px-4 flex flex-col space-y-1 pb-12 text-white">
          {/* Table Head */}
          <li className="grid grid-cols-2 text-gray-500 py-2 px-1md:px-5 cursor-pointer border-b-2 border-white" >
              <div className="flex justify-start items-center space-x-4"> 
                  <p className='text-white pl-4'>Name</p>
              </div>
              
              <div className="flex items-center justify-end ml-auto md:ml-0 ">
                  <p className="w-28 md:w-40  text-white">Amount</p>
              </div>
          </li>
          {
            (portfolioData) ? 
            portfolioData.map((coin,index) => (
              <li key={index} onClick={()=> navigate(`/app/coin/${coin.coinId}`)} className="grid grid-cols-2  text-gray-500 py-2 px-1md:px-5 hover:bg-gray-900 rounded-lg cursor-pointer border-b-2 border-gray-800 " >
                <div className="flex items-center space-x-2 "> 
                    <p className='pl-1'>{index+1}</p>
                    <img className="h-8 w-8 md:h-10 md:w-10 object-contain" src={coin.image} alt="cryptocurrency image " loading='lazy' />
                    <div>
                        <p className=" w-64 truncate text-white break-words">{coin.coinName}</p>
                        <div className='flex space-x-1'>
                            <p>{coin.coinSymbol}</p>
                        </div>
                    </div>
                    
                </div>
                <div className="flex items-center justify-end ml-auto md:ml-0 ">
                    <p className="w-28 md:w-40 text-white font-medium">
                        ${coin.amount}
                        <br />
                        <span className="w-28 md:w-40 text-gray-500">Coins: {coin.coinAmount}</span>
                    </p>
                </div>
            </li>
            ))
            :
            <Loader/>
          }
        </ul>

        </main>
      </div>
      <TabNavigation/>
    </div>
  )
}

export default Portfolio