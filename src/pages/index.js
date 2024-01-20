import React,{useState,useEffect} from 'react'
import SplashScreen from '../components/flashscren/SplashScreen.js'
import logo from '../assets/Logo2.gif'
import Category  from '../components/Category/Category.js'
import '../pages/index.css'
import NavBar from '../components/NavBar/NavBar.js'
import Sidebar from '../components/Slidebar/slidebar.js'
import { Link } from 'react-router-dom';
import Stars from '../components/Stars/stars.js';


export default function Index() {

  const data = [
    {
      id: 1,
      iconClass: 'fas fa-hammer fa-2x', 
      heading: 'Civil Engineer',
      description: 'Description for Civil Engineer',
    },
    {
      id: 2,
      iconClass: 'fas fa-wrench fa-2x', 
      heading: 'Electronics',
      description: 'Description for Electronics',
    },
    {
      id: 3,
      iconClass: 'fas fa-chair fa-2x', 
      heading: 'Furniture',
      description: 'Description for Furniture',
    },
    {
      id: 4,
      iconClass: 'fas fa-car fa-2x', 
      heading: 'Automotive',
      description: 'Description for Automotive',
    },
  ];
  
  
    const [showslash, setFlashScreen] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setFlashScreen(false);
      }, 2000); 
    }, []);

  return (
    <div className='parent'>
        {showslash && <SplashScreen logo={logo} />}
        <div className='d-flex' style={{height: '100vh' }}>
        <Sidebar />
              <div className='flex-grow-1 overflow-auto border'>
                    <div className='container-flex'>
                      <NavBar />
                       <div className='row'>
                         <div className='cols-12'>
                           <Link to='/page1' className='m-2'>Option 1</Link>
                           <Link to='/page2' className='m-2' >Option 2</Link>
                        </div>
                      </div>
                    </div>
                      <div id='main-container' className='container align-item-center'>
                          <div className='row row-cols-md-4 justify-content-md-around justify-content-center'>
                                <Category data={data} />
                          </div>
                     </div>
                  </div>
            </div>
        </div>
  )
}
