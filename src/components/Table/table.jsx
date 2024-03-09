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

  const locations = {
    pathname: '/somewhere',
    state: { fromDashboard: true }
  };

  return (
    <div>
      <div className='container mt-4 '>
          <div className='row '>
          <div className="col-12 mb-4 ">
              <div className="card">

                <div className="row  justify-content-between " >
                  <div className='col-3'>
                  <h5 className="card-sm-title ">Employess <span>| Today</span></h5>
                </div>
                <div className='col-1'>
                <a className="icon" href="/" data-bs-toggle="dropdown"><i className="fas fa-car "></i></a>
                  <ul className="dropdown-menu dropdown-menu-start dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
                    <li><a className="dropdown-item" href="/">Today</a></li>
                    <li><a className="dropdown-item" href="/">This Month</a></li>
                    <li><a className="dropdown-item" href="/">This Year</a></li>
                  </ul>
                </div>
               
                 
                </div>

                <div className="card-body  table-responsive">
                 <table className="table table-borderless table-striped">
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
                      <tr className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                        <td key={index} scope="row">
                        <Link to={{pathname: `worker/${item.id}`}}>
                          <a><img src={item.img} alt="userimag" style={{ width: '50px', height: '50px', borderRadius: '50%' }} /></a>
                          </Link>
                          </td>
                        <td>
                        <Link to={{pathname: `worker/${item.id}`}}>
                          <a className="text-primary fw-bold text-decoration-none employe-name">{item.name}</a>
                          </Link>
                          </td>
                        <td>{item.price}</td>
                        <td className="fw-bold"><Stars Rating={item.rating} /></td>
                        <td>Open Map</td>
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
