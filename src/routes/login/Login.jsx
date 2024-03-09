import React, { useState } from 'react';
import './Login.css';
import logo from '/assets/Logo.png'
import { Link } from 'react-router-dom';

export default function Login({checkAuthentication,error}) {

  const [displayError, setDisplayError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    checkAuthentication(e)
    e.target.elements.email.value='';
    e.target.elements.password.value='';
    setDisplayError(true);

    setTimeout(() => {
      setDisplayError(false);
    }, 2000);
  };

  const gradientStyle = {
    backgroundImage: 'linear-gradient(to right, rgba(235, 232, 116, 0.41), rgb(255 251 234 / 41%),#db7474)',
  };

  return (
    <div>
    <section className="h-100 gradient-form" style={gradientStyle}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">

                    <div className="text-center">
                      <img
                        src={logo}
                        style={{ width: '185px' }}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">We are Connecting Workers</h4>
                    </div>

                    <form onSubmit={handleSubmit}>
                    {displayError && <p className="text-danger">{error}</p>}
                      <p>Please login to your account</p>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Phone number or email address"
                        />
                        <label className="form-label" htmlFor="form2Example11">Username</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form2Example22">Password</label>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-info btn-block  gradient-custom-2 m-3"
                          type="submit"
                        >
                          Log in
                        </button>
                        <a className="text-muted" href="#!">Forgot password?</a>
                      </div>

                      <div className="d-flex align-items-center justify-content-center ">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <Link to="/register"> <button type="button" className="btn btn-outline-info">Create new</button></Link>
                      </div>

                    </form>

                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
