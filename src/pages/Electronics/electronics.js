import React from 'react'

import Sidebar from '../../components/Slidebar/slidebar'
import Dropdown from '../civil/components/Dropdown'
import NavBar from '../../components/NavBar/NavBar'

export default function electronics() {
  return (
    <>
       <div className='d-flex' style={{height: '100vh' }}>
                 <Sidebar />
              <div className='flex-grow-1 overflow-auto border'>
                  <div className='container-flex'>
                        <NavBar />
                     <Dropdown />
                 </div>
            </div>
      </div>
    </>
  )
}
