import React from 'react'
import SoftwareData from '../../database/productivity_softwares/productivity-softwares.json'
import DevCards from '../../components/Cards/DevCards'

const ProductiviyPage = () => {
  return (
<div className='w-[100%] h-[100%] flex flex-col gap-3 px-2 py-3 overflow-y-scroll '>
      
      <div className='w-[100%] flex flex-col items-center justify-center gap-3'>
        <p className='text-[2rem]'>Productivity Softwares</p>
        <div className='flex flex-col justify-evenly gap-4 items-center'>
        {
        SoftwareData.map((item, index) => {
          return <DevCards key={index} tool={item.software_name} logo={item.icon} link={item.home_page} desc={item.software_desc} download={item.download_desktop} phone={item.download_phone} iphone={item.download_iphone}/>
        })
      }
        </div>
      </div>

    </div>
  )
}

export default ProductiviyPage
