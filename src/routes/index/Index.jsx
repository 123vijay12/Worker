import React from 'react'
import Sidebar from '../../components/Slidebar/slidebar'
import NavBar from '../../components/Navbar/NavBar'
import Forms from '../../components/form/Forms'
import Footer from '../../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import SubCategory from '../sub-category/SubCategory'
import { useSelector } from 'react-redux'

export default function Index() {

  const data=useSelector(store=>store.user);
  
console.log(data)
  return (
    <div>
      <div className="parent">
        {/* {showslash && <SplashScreen logo={logo} />} */}
        <div className="d-flex" style={{ height: "100vh" }}>
          <Sidebar />
          <div className="flex-grow-1 overflow-auto border">
            <div className="container-flex">
              <NavBar />
            </div>
            <div id="main-container" className="container align-item-center" style={{marginTop:"15vh"}}>
              <div className="row mt-5 justify-content-md-around justify-content-center" >
                <Outlet />
              </div>
              <Footer />
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}
