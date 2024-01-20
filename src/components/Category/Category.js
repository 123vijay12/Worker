import React from 'react';
import './Category.css';
import { useNavigate } from 'react-router-dom';

export default function Category(props) {
  const navigate = useNavigate();

  const handleButtonClick = (heading) => {
    console.log(heading);
    switch (heading) {
      case 'Civil Engineer':
        navigate(`/civil`);
        break;
      case 'Electronics':
        navigate(`/electronics`);
        break;
      // Add more cases for other headings/routes as needed
      default:
        navigate(`/`);
        break;
    }
  };

  const {data}=props;
  return (
    <>
    {data.map((item,index) =>(
           <div  key={index} className='col-sm-3 m-2 border border-primary btn btn-secondary' id="category" onClick={() => handleButtonClick(item.heading)}>
              <div className='row'>
                <div className='col-12' id="cat-heading">
                  <h3> {item.heading}</h3>
                </div>
                <div className='cols-12'>
                  <div className='row '>
                      <div className='col-12  align-self-center mt-3 p-1' id='icon'>
                          <i className={item.iconClass}></i>
                      </div>
                      <div className='col-12 mt-4' id='cat-description'>
                          <h6>{item.heading}</h6>
                          <p>{item.description}</p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
      ))}
     </>
  )
}
