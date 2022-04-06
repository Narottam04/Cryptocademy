import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { BsFillBarChartFill, BsGlobe2 } from 'react-icons/bs'
import { MdOutlineWatchLater } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import TabNavigation from '../Components/TabNavigation'
import { useAuth } from '../Context/AuthContext'

const MoreMobileNavPage = () => {
    const {currentUser} =useAuth()

  return (
    <div className='bg-black'>
      {/* desktop dasboard */}
      <div className="flex flex-row min-h-screen bg-black text-gray-800 md:overflow-x-hidden">
        <Sidebar/>
        <main className="main flex flex-col flex-grow -ml-64 lg:ml-0 transition-all duration-150 ease-in pl-64 bg-black ">

        <Link to="/app/profile" className='px-4 mt-3 flex justify-between items-center '>        
            <div className="flex items-center p-2  space-x-4 justify-self-end cursor-pointer">
                <img src={`https://avatars.dicebear.com/api/initials/${currentUser.displayName}.svg`} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                <div>
                    <h2 className="text-lg font-semibold text-white">{currentUser.displayName}</h2>
                    <span className="flex items-center space-x-1">
                        <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">View profile</a>
                    </span>
                </div>
            </div>
            <AiOutlineRight className='inline-block text-white w-5 h-5 mb-1'/>
        </Link>
        
        <div className='shadow-lg rounded-2xl bg-gray-900 py-6 mx-4 mt-4 space-y-4'>

            <Link to="/app/news" className='px-4  flex justify-between items-center'>        
                <div className="flex justify-center space-x-2 items-center cursor-pointer">
                    <BsGlobe2 className='inline-block text-gray-200 w-5 h-5 '/>
                    <h2 className="text-xl font-semibold text-gray-200">News</h2>
                </div>
                <AiOutlineRight className='inline-block text-gray-200 w-5 h-5 mb-1'/>
            </Link>
            
            <Link to="/app/watchlist" className='px-4  flex justify-between items-center'>        
                <div className="flex justify-center space-x-2 items-center cursor-pointer">
                    <MdOutlineWatchLater className='inline-block text-gray-200 w-6 h-6 '/>
                    <h2 className="text-xl font-semibold text-gray-200">Watchlist</h2>
                </div>
                <AiOutlineRight className='inline-block text-gray-200 w-5 h-5 mb-1'/>
            </Link>
            
            <Link to="/app/leaderboard" className='px-4  flex justify-between items-center'>        
                <div className="flex justify-center space-x-2 items-center cursor-pointer">
                    <BsFillBarChartFill className='inline-block text-gray-200 w-5 h-5 '/>
                    <h2 className="text-xl font-semibold text-gray-200">Global Leaderboard</h2>
                </div>
                <AiOutlineRight className='inline-block text-gray-200 w-5 h-5 mb-1'/>
            </Link>
        </div>

        <p className='text-white font-bold text-lg  font-title mt-4 ml-3 px-2 md:px-4'>About</p>
        
        <div className='shadow-lg rounded-2xl bg-gray-900 py-6 mx-4 mt-2 space-y-4'>

            <Link to="/app/news" className='px-4  flex justify-between items-center'>        
                <div className="flex justify-center space-x-2 items-center cursor-pointer">
                    <h2 className="text-xl font-semibold text-gray-200">Newsletter</h2>
                </div>
                <AiOutlineRight className='inline-block text-gray-200 w-5 h-5 mb-1'/>
            </Link>
            
            <Link to="/app/watchlist" className='px-4  flex justify-between items-center'>        
                <div className="flex justify-center space-x-2 items-center cursor-pointer">
                    <h2 className="text-xl font-semibold text-gray-200">Terms & Privacy</h2>
                </div>
                <AiOutlineRight className='inline-block text-gray-200 w-5 h-5 mb-1'/>
            </Link>
            
            <Link to="/app/leaderboard" className='px-4  flex justify-between items-center'>        
                <div className="flex justify-center space-x-2 items-center cursor-pointer">
                    <h2 className="text-xl font-semibold text-gray-200">Community Rules</h2>
                </div>
                <AiOutlineRight className='inline-block text-gray-200 w-5 h-5 mb-1'/>
            </Link>
            
            <Link to="/app/leaderboard" className='px-4  flex justify-between items-center'>        
                <div className="flex justify-center space-x-2 items-center cursor-pointer">
                    <h2 className="text-md font-semibold text-green-400">Share the cryptocademy app.</h2>
                </div>
            </Link>
        </div>

        <p className='text-white font-bold text-lg  font-title mt-4 ml-3 px-2 md:px-4'>Support</p>
        
        <div className='shadow-lg rounded-2xl bg-gray-900 py-6 mx-4 mt-2 space-y-4'>

            <Link to="/app/news" className='px-4  flex justify-between items-center'>        
                <div className="flex justify-center space-x-2 items-center cursor-pointer">
                    <h2 className="text-xl font-semibold text-gray-200">Contact Support</h2>
                </div>
                <AiOutlineRight className='inline-block text-gray-200 w-5 h-5 mb-1'/>
            </Link>
            
            <Link to="/app/watchlist" className='px-4  flex justify-between items-center'>        
                <div className="flex justify-center space-x-2 items-center cursor-pointer">
                    <h2 className="text-xl font-semibold text-gray-200">FAQ</h2>
                </div>
                <AiOutlineRight className='inline-block text-gray-200 w-5 h-5 mb-1'/>
            </Link>
        </div>

        </main>
      </div>
      <TabNavigation/>
    </div>
  )
}

export default MoreMobileNavPage