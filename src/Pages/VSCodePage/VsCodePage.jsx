import React from 'react'
import DevCards from '../../components/Cards/DevCards'
import VSData from '../../database/vscode/vscode-extensions.json'

const VsCodePage =() => {
  return (
    <div className='w-[100%] h-[100%] flex flex-col gap-3 px-2 py-3 overflow-y-scroll'>
      
      <div className='w-[100%] flex flex-col items-center justify-center gap-3'>
        <p className='text-[2rem]'>VSCode Extensions</p>
        <div className='flex flex-col justify-evenly gap-4 items-center pb-3'>
        {
        VSData.map((item, index) => {
          return <DevCards key={index} tool={item.extension_name} logo={null} link={item.extension_link} desc={item.extension_desc}/>
        })
      }
        </div>
      </div>

    </div>
  )
}

export default VsCodePage
