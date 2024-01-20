import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Sidebar from '../../components/Slidebar/slidebar'
import './civil.css'
import Table from '../../components/Table/table';
import Emp1 from '../../assets/emp1.jpg';
import Emp2 from '../../assets/emp2.jpeg';
import Emp3 from '../../assets/emp4.jpg';
import Emp4 from '../../assets/emp6.jpg';
import Emp5 from '../../assets/emp7.jpg';


export default function civil() {

  const data=[
    {
      "img":Emp1,
      "name":"PREM NATH ",
      "price":"$34",
      "rating":3.2,
      "location": {
        lat: 12.935,
        lng: 77.556
      }
    },
    {
      "img":Emp2,
      "name":"AMRESH ANAND ",
      "price":"$76",
      "rating":4.5,
      "location": {
        lat: 12.955,
        lng: 77.576
      }
    },
    {
      "img":Emp3,
      "name":"RAVI KANT PASWAN ",
      "price":"$57",
      "rating":3,
      "location": {
        lat: 12.955,
        lng: 77.576
      }
    },
    {
      "img":Emp4,
      "name":"RAKESH KUMAR ",
      "price":"$67",
      "rating":5,
      "location": {
        lat: 12.955,
        lng: 77.576
      }
    },
    {
      "img":Emp5,
      "name":"NEERAJ DINMANI ",
      "price":"$67",
      "rating":5,
      "location": {
        lat: 12.955,
        lng: 77.576
      }
    }

  ]


  return (
    <>
<div classNameName='d-flex' >
    <div className='d-flex' style={{height: '100vh' }}>
        <Sidebar />
              <div className='flex-grow-1 overflow-auto border'>
                    <div className='container-flex'>
                      <NavBar />
                      <Table details={data}/>
                   </div>
            </div>                 
    </div>
</div>
</> 
  )
}
