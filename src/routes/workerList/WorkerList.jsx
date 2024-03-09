import React from "react";
import "./civil.css";
import Emp1 from "/assets/emp1.jpg";
import Emp2 from "/assets/emp2.jpeg";
import Emp3 from "/assets/emp4.jpg";
import Emp4 from "/assets/emp6.jpg";
import Emp5 from "/assets/emp7.jpg";
import Table from "../../components/Table/table"
export default function WorkerList() {
  const data = [
    {
      id:1,
      img: Emp1,
      name: "PREM NATH ",
      price: "$34",
      rating: 3.2,
      location: {
        lat: 12.935,
        lng: 77.556,
      },
    },
    {
      id:2,
      img: Emp2,
      name: "AMRESH ANAND ",
      price: "$76",
      rating: 4.5,
      location: {
        lat: 12.955,
        lng: 77.576,
      },
    },
    {
      id:3,
      img: Emp3,
      name: "RAVI KANT PASWAN ",
      price: "$57",
      rating: 3,
      location: {
        lat: 12.955,
        lng: 77.576,
      },
    },
    {
      id:4,
      img: Emp4,
      name: "RAKESH KUMAR ",
      price: "$67",
      rating: 5,
      location: {
        lat: 12.955,
        lng: 77.576,
      },
    },
    {
      id:5,
      img: Emp5,
      name: "NEERAJ DINMANI ",
      price: "$67",
      rating: 5,
      location: {
        lat: 12.955,
        lng: 77.576,
      },
    },
    
  ];

  return (
    <>
      <div className="">
        <Table details={data} />
      </div>
    </>
  );
}
