import React from 'react'
import { Navbar,Footer,Sidebar,ThemeSettings } from './compoents';
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { useStateContext } from './context/ContextProvider'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { Ecommerce, Orders, Employees,Customers,Editor } from'./pages'

const App = () => {
  const { activeMenu }= useStateContext();
  return (
    <div>
      <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zindex:'1000' }}>
          <TooltipComponent content="settings" position="Top">
              <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" style={{ background:'blue',borderRadius:'50%' }}>
                <FiSettings/>
              </button>
          </TooltipComponent>

        </div>
        {activeMenu ? (
          <div className = "w-72 fixed sidebar dark:bg-secondary-dark-bg bf-white">
            <Sidebar/>
          </div>
        ):(
          <div className='w-0 dark:bg-secondary-dark-bg'>
            <Sidebar/>
            
          </div>
        )}
        
        <div className={
          
          `dark:bg-main-bg bg-black min-h-screen w-full
          ${activeMenu ? ' md:ml-72' :'flex-2'}`}>
            

            <div className = "fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full"> 
            <Navbar/>
            </div>
        
        <div className="text-white font-bold text-5xl ml-20 pt-20">
          Digital Dukaandar
        </div>
        <Routes>
          
          {/*dashboard*/}
          <Route path="/" element={<Ecommerce/>}/>
          <Route path  = "/ecommerce" element={<Ecommerce/>}/>
          {/*pages*/}
          <Route path  = "/orders" element={<Orders/>}/>
          <Route path  = "/employees" element={<Employees/>}/>
          <Route path  = "/customers" element={<Customers/>}/>
          
          <Route path  = "/editor" element={<Editor/>}/>


        </Routes>
        </div>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App