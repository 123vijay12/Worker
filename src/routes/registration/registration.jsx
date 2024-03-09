import React, { useRef } from "react";
import $ from 'jquery';
import { useDispatch } from "react-redux";


export default function registration() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const submiform = (e) => {
    e.preventDefault();

    // Extract form values
    const username = e.target.elements.username.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const re_password = e.target.elements.re_password.value;
    const address = e.target.elements.address.value;
    const phoneNumber = e.target.elements.phone.value;
  
    if (password !== re_password) {
      console.log("Passwords do not match");
      // You can add logic here to show an error message to the user, etc.
      return;
    }
    // Construct user data object
    const userData = {
      username,
      email,
      password,
      address,
      phoneNumber,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    dispatch(createUser(userData));
    console.log(userData)
   

   };


  const gradientStyle = {
    backgroundImage:
      "linear-gradient(to right, rgba(235, 232, 116, 0.41), rgb(255 251 234 / 41%),#db7474)",
  };

  return (
    <div>
      <section className="" style={gradientStyle}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-2">
                  <div className="row justify-content-center">
                    <div className="error-alert" style={{ display: "none" }}>
                      <div className="alert alert-danger d-flex align-items-center" role="alert">
                        <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xmlnsXlink="#exclamation-triangle-fill" /></svg>
                        <div>
                        Invalid credentials. Please check your inputs.    
                        </div>
                      </div>
                    </div>
                    <div className="success-alert" style={{ display: "none" }}>
                      <div className="alert alert-success d-flex align-items-center" role="alert">
                        <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xmlnsXlink="#check-circle-fill" /></svg>
                        <div>
                        Registration successful
                        </div>
                      </div>
                    </div>

                    <div className=" col-6 order-lg-1">
                      <p className="text-center h1 fw-bold  mx-1 mx-md-4 ">Sign up</p>
                      <form
                        ref={formRef}
                        className="mx-1 mx-md-4"
                        onSubmit={submiform}
                      >
                        <div className="d-flex flex-row align-items-center mb-2">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label htmlFor="username" className="form-label">
                              Username:
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="username"
                              name="username"
                              required
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label htmlFor="email" className="form-label">
                              Email:
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              name="email"
                              required
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="password"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              id="password"
                              name="password"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label htmlFor="password" className="form-label">
                              re-Password:
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="re_password"
                              name="re_password"
                              required
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label htmlFor="dob" className="form-label">
                              Date of Birth:
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              id="dob"
                              name="dob"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label htmlFor="phone" className="form-label">
                              Phone Number:
                            </label>
                            <input
                              type="tel"
                              className="form-control"
                              id="phone"
                              name="phone"
                              required
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-2">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label htmlFor="address" className="form-label">
                              Address:
                            </label>
                            <textarea
                              className="form-control"
                              id="address"
                              name="address"
                            ></textarea>
                          </div>
                        </div>

                        {/* <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label htmlFor="profile-picture" className="form-label">
                              Profile Picture:
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              id="profile-picture"
                              name="profile-picture"
                              accept="image/*"
                            />
                          </div>
                        </div> */}

                        <div className="form-check d-flex justify-content-center mb-2">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-2">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
