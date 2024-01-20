import React from 'react'
import Stars from '../Stars/stars'
// import Emp1 from '../../assets/emp1.jpg';
import { Link } from 'react-router-dom';
import './table.css'

export default function table(props) {

  const location = {
    lat: 12.9751503113215,
    lng: 77.5962120508646,
  };

  return (
    <div>
      <div className='container mt-4'>
          <div className='row'>
          <div class="col-12 mb-4">
              <div class="card">

                <div class="row  justify-content-between">
                  <div className='col-3'>
                  <h5 class="card-sm-title ">Employess <span>| Today</span></h5>
                </div>
                <div className='col-1'>
                <a class="icon" href="/" data-bs-toggle="dropdown"><i class="fas fa-car "></i></a>
                  <ul class="dropdown-menu dropdown-menu-start dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
                    <li><a class="dropdown-item" href="/">Today</a></li>
                    <li><a class="dropdown-item" href="/">This Month</a></li>
                    <li><a class="dropdown-item" href="/">This Year</a></li>
                  </ul>
                </div>
               
                 
                </div>

                <div class="card-body  table-responsive">
                 <table class="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col" >Photo </th>
                        <th scope="col" > Name</th>
                        <th scope="col" >Price</th>
                        <th scope="col" >Rating</th>
                        <th scope="col" >Location</th>
                      </tr>
                    </thead>
                    <tbody>
                    {props.details.map((item,index) =>(
                      <tr>
                        <th scope="row">
                        <Link to={{ pathname: `/employee/${index}`, state: { employeeData: item }}}>
                          <a href="/"><img src={item.img} alt="userimag" style={{ width: '50px', height: '50px', borderRadius: '50%' }} /></a>
                          </Link>
                          </th>
                        <td> <Link to={`/employe/${index}`} style={{ textDecoration: 'none', color: 'inherit', cursor: 'text' }}><a href="/" class="text-primary fw-bold text-decoration-none employe-name">{item.name}</a></Link></td>
                        <td>{item.price}</td>
                        <td className="fw-bold"><Stars Rating={item.rating} /></td>
                        <td>
                        <Link to={{ pathname: `/employee/${index}/map`}}>
                          Open Map
                        </Link>

                        </td>
                      </tr>
                      ))}
                    </tbody>
                  </table>

                </div>
             </div>
              </div>
          </div>
        </div>
    </div>
  )
}
