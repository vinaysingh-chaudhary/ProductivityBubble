import React from 'react'
import {FiArrowUpRight} from 'react-icons/fi'
import {BiSolidExtension} from 'react-icons/bi'
import {AiFillApple} from 'react-icons/ai'
import {BsAndroid} from 'react-icons/bs'
import {LiaDownloadSolid} from 'react-icons/lia'

const DevCards = ({tool, logo, desc, link, download, phone, iphone}) => {
  return (
    <div className='w-[100%] min-h-[95px] border-2 border-[#d8d8d8] px-2 flex justify-around rounded-md bg-[#ffffff] xl:hover:bg-[#d8d8d8] group transition-all duration-200 delay-200 ease'>

        {
            logo !== null
            ? (<img className='w-[12%] object-contain pl-1 rounded-md sm:w-[10%] md:w-[8%] lg:w-[6%] xl:py-6 xl:group-hover:scale-[1.2]  transition-all duration-200 delay-200 ease' src={logo} alt="" /> )
             : (<BiSolidExtension className=' w-[10%] h-[100%] flex justify-center items-center text-[#a18484]'/> )
        }
        

        <div className='w-[80%] flex flex-col justify-center items-center pl-3 py-1'>
          <p className=' text-left w-[100%] text-md lg:text-lg xl:mt-3 xl:group-hover:text-2xl  transition-all duration-200 delay-200 ease'>{tool}</p>
          <p className=' w-[100%] flex justify-center items-center text-[0.8rem] h-[80%] visible sm:hidden text-[#6c6c6c] font-Montserrat mt-1 xl:group-hover:text-[#373737]'>{desc.length> 100 ? `${desc.substring(0,100)}...` : desc}</p>
          <p className=' w-[100%] justify-start items-center hidden sm:flex lg:hidden text-[0.8rem] h-[80%] text-[#6c6c6c] font-Montserrat mx-1 xl:group-hover:text-[#373737]'>{desc.length> 100 ? `${desc.substring(0,200)}...` : desc}</p>
          <p className=' w-[100%]  justify-start items-center hidden lg:flex text-[0.9rem] h-[80%] text-[#6c6c6c] font-Montserrat mx-1 xl:group-hover:text-[#1f1f1f]'>{desc}</p>
        </div>
 
        <div className=' w-[7.5%] flex justify-center items-center pl-2 xl:flex-col gap-2'>
        <a href={link} className='w-[100%] border-2 rounded-full border-[#d1d0d0] flex justify-center items-center xl:group-hover:scale-[1.3] xl:group-hover:text-blue-400 xl:group-hover:border-white transition-all duration-200 delay-200 ease group-hover:bg-white ' target='_blank'><FiArrowUpRight/></a>
        
        {
          phone
          ? ( <div className='w-[100%] h-[40%] hidden xl:flex justify-around items-center gap-3'>
            <a className='xl:group-hover:scale-[1.5]  transition-all duration-200 delay-200 ease' href={iphone}><AiFillApple className='text-2xl'/></a>
            <a className='xl:group-hover:scale-[1.5] xl:group-hover:text-green-500  transition-all duration-200 delay-200 ease' href={phone}><BsAndroid className='text-3xl'/></a>
            <a className='xl:group-hover:scale-[1.5] xl:group-hover:text-blue-400  transition-all duration-200 delay-200 ease' href={download}><LiaDownloadSolid className='text-2xl'/></a>
        </div>)
         :  (<div></div>)
        }
        </div>
    </div>
  )
}

export default DevCards
