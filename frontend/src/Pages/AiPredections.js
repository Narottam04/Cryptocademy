import React from 'react'
import {motion} from 'framer-motion'
import Sidebar from '../Components/Sidebar'
import TabNavigation from '../Components/TabNavigation'
import { Helmet } from 'react-helmet'
const AiPredections = () => {
  return (
    <div className='bg-black'>
      {/* desktop dasboard */}
      <div className="flex flex-row min-h-screen bg-black text-gray-800 md:overflow-x-hidden">
        <Sidebar active={`aiPredection`} />
        <motion.div 
          intial = {{opacity:0}}
          animate = {{opacity:1}}
          exit = {{opacity:0, transition:{duration: 0.2}}}
          className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in pl-64 bg-black ">
          <p className='text-white font-bold text-2xl md:text-3xl font-title my-4 ml-3'>Ai Predections</p>
            
        </motion.div>
      </div>
      <TabNavigation/>
    </div>
  )
}

export default AiPredections