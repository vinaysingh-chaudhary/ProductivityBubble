import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className='w-[100%] max-h-[100%] flex flex-col items-center justify-normal gap-4'>
        <p className=''>Error!</p>
        <button 
        onClick={() => navigate("/")}
        className='w-[30%] h-[50px]  sm:w-[22%] md:w-[20%] lg:w-[15%] xl:w-[10%] border-2 rounded-md shadow-md shadow-[#484747] bg-[#c5c5c5] hover:scale-[1.2] hover:text-white border-none transition-all duration-200 delay-200'
        >Home</button>
    </div>
  )
}

export default ErrorPage
