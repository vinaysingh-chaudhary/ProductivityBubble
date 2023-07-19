import NavBar from "./components/NavBar";
import HomePage from "./Pages/HomePage/HomePage";
import VsCodePage from "./Pages/VSCodePage/VsCodePage";
import ProductivityPage from "./Pages/ProductivityPage/ProductiviyPage";
import ExtensionPage from "./Pages/ExtensionPage/ExtensionPage";
import ErrorPage from "./Pages/Error/ErrorPage";
// import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import {AiOutlineTwitter} from 'react-icons/ai'

function App() {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center flex-col xl:h-[100vh]">
      <div className="w-[100%] h-[5%]"><p className="flex text-2xl gap-2 items-center xl:text-left justify-center">ProductivityBubble<span className="flex items-center gap-1 text-[0.8rem] "><AiOutlineTwitter className="text-[#8bc9ff] text-[1.2rem]"/><a href="https://twitter.com/Viisactive">Vinay</a></span></p></div>

      <div className="w-[100%] h-[95%] flex flex-col items-center justify-around xl:flex-row" >
        <div className="w-[92%] h-[6%] xl:w-[15%] xl:h-[30%] xl:ml-2 mt-3">
          <NavBar />
      </div>

        <div className="w-[100%] h-[94%] flex justify-center items-center xl:h-[100%]">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/productivity" element={<ProductivityPage />}></Route>
            <Route path="/chrome" element={<ExtensionPage />}></Route>
            <Route path="/vscode" element={<VsCodePage />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </div>
      </div>


    </div>
  );
}

export default App;
