import React, { useEffect, useState ,useh} from 'react'
import Map from '../map/Map'; 
import { useNavigate } from 'react-router-dom';



export default function Forms() {
  const [formData, setFormData] = useState({
    location: '',
    // other form fields
  });
  const navigate = useNavigate();

  const [isMapVisible, setIsMapVisible] = useState(false);

  const handleLocationChange = (location) => {
    setFormData({ ...formData, location });
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMapButtonClick = () => {
    setIsMapVisible(true);
  };

  const handleMapClose = () => {
    setIsMapVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    handleMapClose();
    console.log("getting..")
    // Additional logic to send the form data to the server or perform other actions
    navigate('/workers/list/:civil')
  };

  return (
    <div className="col-md-10 border shadow-lg p-3 mb-5 bg-body rounded">
      <div className="row  mt-2 mb-2">
    <div className="col-md-5 border m-md-auto">
      <form onSubmit={handleSubmit}>
      <div data-mdb-input-init className="form-outline mb-4">
        <input type="text"className="form-control mt-2" name="loaction"  onChange={handleInputChange} />
        <label> Loaction </label>
      <label className='m-3'><button type="button" className='btn btn-sm btn-primary' onClick={handleMapButtonClick}>
        Open Map
      </button></label>
      </div>
      
      <br />

      {/* Button to toggle the visibility of the Map component */}
      

      {/* Map Component for selecting location (conditionally rendered) */}
      {isMapVisible && <Map onSelectLocation={handleLocationChange}/>}
  <div data-mdb-input-init className="form-outline mb-4">
    <input type="text" id="form4Example1" className="form-control text-center" />
    <label className="form-label" for="form4Example1">Name</label>
  </div>

  
  <div data-mdb-input-init className="form-outline mb-4">
    <input type="email" id="form4Example2" className="form-control text-center" />
    <label className="form-label" for="form4Example2">Email address</label>
  </div>

  <div data-mdb-input-init className="form-outline mb-4">
    <input type="number" id="form4Example2" className="form-control text-center" />
    <label className="form-label" for="form4Example2">Mobile Number</label>
  </div>
  
  <div data-mdb-input-init className="form-outline mb-4">
    <textarea className="form-control" id="form4Example3" rows="4"></textarea>
    <label className="form-label" for="form4Example3">Discription</label>
  </div>

 
  <div className="form-check d-flex justify-content-center mb-4">
    <input className="form-check-input me-2" type="checkbox" value="" id="form4Example4" checked/>
    <label className="form-check-label" for="form4Example4">
      Send me a copy of this message
    </label>
  </div>

  <div className='text-center'>
  <button data-mdb-ripple-init type="button" className="btn btn-primary btn-lg btn-block mb-4">Send</button>
  </div>
</form>

    </div>
    </div>
    </div>
  );
};
  

