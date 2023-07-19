import React from 'react'
import DevCards from '../../components/Cards/DevCards'
import IDEData from '../../database/Developer_tools/code-editors.json'
import DesignData from '../../database/Developer_tools/design_tools.json'
import DevData from '../../database/Developer_tools/developer-tools.json'


const HomePage = ()=> {


  return (
    <div className='w-[100%] h-[100%]  flex flex-col gap-4 overflow-y-scroll xl:flex-row xl:flex-wrap xl:gap-0 pt-4 px-3 py-3'>

      <div className='w-[100%] flex flex-col items-center justify-center gap-3'>
        <p className='text-[2rem]'>Code Editors</p>
        <div className='flex flex-col justify-evenly gap-4 items-center'>
        {
        IDEData.map((item, index) => {
          return <DevCards key={index} tool={item.tool} logo={item.logo} link={item.link} desc={item.desc}/>
        })
      }
        </div>
      </div>


      <div className='w-[100%] flex flex-col items-center justify-center gap-3'>
        <p className='text-[2rem]'>Design Tools</p>
        <div className='flex flex-col justify-evenly gap-4 items-center'>
        {
        DesignData.map((item, index) => {
          return <DevCards key={index} tool={item.tool} logo={item.logo} link={item.link} desc={item.desc}/>
        })
      }
        </div>
      </div>


      <div className='w-[100%] flex flex-col items-center justify-center gap-3 '>
        <p className='text-[2rem]'>Developer Tools</p>
        <div className='flex flex-col justify-evenly gap-4 items-center'>
        {
        DevData.map((item, index) => {
          return <DevCards key={index} tool={item.tool} logo={item.logo} link={item.link} desc={item.desc}/>
        })
      }
        </div>
      </div>
    </div>
  )
}

export default HomePage
