import React from "react";
import {NavLink} from 'react-router-dom'

function NavBar() {
  return (
    
      
      <nav className="w-[100%] h-[100%] flex justify-center bg-[#eceaea] px-2 rounded-md">
        <ul className=" w-[100%] h-[100%] flex gap-2 justify-evenly items-center xl:flex-col xl:py-4 rounded-md"> 
           <NavLink className="w-[24%] xl:h-[25%] flex justify-center items-center text-gray-500 xl:transition-all xl:duration-300 xl:delay-200 xl:ease-linear" to="/"><li>Home</li></NavLink>
           <NavLink className="w-[24%] xl:h-[25%] flex justify-center items-center text-gray-500 xl:transition-all xl:duration-300 xl:delay-200 xl:ease-linear" to="/productivity"><li >Productiviy</li></NavLink>
           <NavLink className="w-[24%] xl:h-[25%] flex justify-center items-center text-gray-500 xl:transition-all xl:duration-300 xl:delay-200 xl:ease-linear" to="/chrome"><li >Extensions</li></NavLink>
           <NavLink className="w-[24%] xl:h-[25%] flex justify-center items-center text-gray-500 xl:transition-all xl:duration-300 xl:delay-200 xl:ease-linear" to="/vscode"><li>VSCode</li></NavLink>
        </ul>

      </nav>

  );
}

export default NavBar;
