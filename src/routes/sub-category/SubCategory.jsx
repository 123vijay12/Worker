import React from "react";
import Emp1 from "/assets/emp1.jpg";
import Emp2 from "/assets/emp2.jpeg";
import Emp3 from "/assets/emp4.jpg";
import Emp4 from "/assets/emp6.jpg";
import Emp5 from "/assets/emp7.jpg";
import civ2 from "/assets/civ2.webp";
import civ3 from "/assets/civ3.jpg";
import civ4 from "/assets/civ4.jpg";
import demolition from "/assets/Demolition.jpg";
import land from "/assets/Land Development.jpg";
import sitePre from "/assets/Site Preparation.jpg";
import { Link } from "react-router-dom";

export default function SubCategory() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 m-md-1 border">
          <div className="row">
            <div className="col-md-2">
              <table className="table table-responsive">
                <thead>
                  <tr>
                    <th>catagory</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Walls</td>
                  </tr>
                  <tr>
                    <td>Compounds</td>
                  </tr>
                  <tr>
                    <td>Steels</td>
                  </tr>
                  <tr>
                    <td>Self</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="m-md-1 col-md-9 border">
              <div className="m-md-3 row row-cols-md-3">
              <Link to={"/workers/form"}>
                <div className="col mb-3">
                  <div className="card" style={{ width: "17rem" }}>
                    <img
                      src={civ2}
                      className="card-img-top img-fluid"
                      alt="..."
                      style={{ height: "10rem", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Wall Building per feet.
                      </p>
                    </div>
                  </div>
                </div>
                </Link>
                <div className="col mb-3">
                  <div className="card" style={{ width: "17rem" }}>
                    <img
                      src={civ3}
                      className="card-img-top img-fluid"
                      alt="..."
                      style={{ height: "10rem", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col mb-3">
                  <div className="card" style={{ width: "17rem" }}>
                    <img
                      src={civ4}
                      className="card-img-top"
                      alt="..."
                      style={{ height: "10rem", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col mb-3">
                  <div className="card" style={{ width: "17rem" }}>
                    <img
                      src={demolition}
                      className="card-img-top"
                      alt="..."
                      style={{ height: "10rem", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col mb-3">
                  <div className="card" style={{ width: "17rem" }}>
                    <img
                      src={land}
                      className="card-img-top"
                      alt="..."
                      style={{ height: "10rem", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col mb-3">
                  <div className="card" style={{ width: "17rem" }}>
                    <img
                      src={sitePre}
                      className="card-img-top"
                      alt="..."
                      style={{ height: "10rem", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col mb-3">
                  <div className="border text-center" style={{ width: "17rem" }}>one</div>
                </div>
                <div className="col mb-3 ">
                  <div className="border text-center">one</div>
                </div>
                <div className="col mb-3">
                  <div className="border text-center">one</div>
                </div>
                <div className="col mb-3">
                  <div className="border text-center">one</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
