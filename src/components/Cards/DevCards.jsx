import React from 'react'
import {FiArrowUpRight} from 'react-icons/fi'
import {BiSolidExtension} from 'react-icons/bi'

const DevCards = ({tool, logo, desc, link, download}) => {
  return (
    <div className='w-[100%] min-h-[95px] border-2 px-2 flex rounded-md bg-[#ffffff]'>

        {
            logo !== null
            ? (<img className='w-[12%] object-contain pl-1 rounded-md' src={logo} alt="" /> )
             : (<BiSolidExtension className=' w-[10%] h-[100%] flex justify-center items-center text-[#a18484]'/> )
        }
        

        <div className='w-[80%] flex flex-col justify-center items-center pl-3 pt-1'>
        <p className=' text-left w-[100%] text-md'>{tool}</p>
        <p className='text-[0.8rem] h-[80%] visible xl:hidden text-[#a3a3a3]'>{desc.length> 100 ? `${desc.substring(0,100)}...` : desc}</p>
        <p className='hidden xl:block'>{desc}</p>
        </div>

        <div className=' w-[7.5%] flex justify-center items-center pl-2'>
        <a href={link} className='w-[100%] border-2 rounded-full border-[#d1d0d0]' target='_blank'><FiArrowUpRight/></a>
        </div>

    </div>
  )
}

export default DevCards
