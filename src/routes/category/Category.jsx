import React from 'react';
import './Category.css';
import { Link } from 'react-router-dom';

export default function Category(props) {

  const {data}=props;
  return (
    <>
      {data.map((item, index) => (
         <div key={index} className='col-md-6 m-2 border  btn btn-secondary text-decoration-noun text-reset shadow-lg' id="category">
         <Link className='link-cat' to={`/workers/subcategory/${item.link}`}>
           <div className='row'>
             <div className='col-md-3  align-self-center mt-3 p-1' id='icon'>
                   <i className={item.iconClass}></i>
                   </div>
                   <div className='col-md-3 align-self-center' id="cat-heading">
               <h3> {item.heading}</h3>
             </div>
                 <div className='col-md-3 mt-4' id='cat-description'>
                   <h6>{item.heading}</h6>
                   <p>{item.description}</p>
                 </div>  
           </div>
         </Link>
       </div>
      ))}
    </>
  )
}

