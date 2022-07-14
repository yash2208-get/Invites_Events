import { PieChart, Pie,  Tooltip } from 'recharts';
import React, { useState } from 'react'
import './style.css';

function Navbar() {
  const [value1,setValue3]=useState("");
  const [value2,setValue4]=useState("");
  console.log(value1);
  console.log(value2);
  let b=value1*value2;
  
      const data02=[{
        "name": value2,
      "value": b
      }];     
      
  return (
    <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <div className="container-fluid">
    <a className="navbar-brand" href="#">Dashboard</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><i className="fa fa-plus "></i>Create Course</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><i className="fa fa-eye"></i> Preview Home Page</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"> <i className="fa fa-eye" ></i>preview after login Page</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><i className="fa fa-power-off" aria-hidden="true"></i>view welcome screen</a>
        </li>
        
      </ul>
      <p className="d-flex">
        
        <button class="w-fit rounded-full p-1 pr-5 pl-5 bg-pink-600 text-white text-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">Invite</button>
      </p>
    </div>
  </div>
</nav>

















<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen bg_color">
    <div class="modal-content bg_color">
      <div class="modal-header">
        
        <button type="button" class="btn_close1" data-bs-dismiss="modal">
        <i class="fa fa-close fa-2x"></i>

        </button>
      </div>
      <div class="modal-body">
      <label>Number of Invites</label><br></br>
          <input type="number"  placeholder="Number Of intive" min={1} required 
                        value={value1}
                        onChange={(e)=>setValue3(e.target.value)}
                    />
                    <br></br>
                    <br></br>
                      <label>Duration of Event</label><br></br>
                      <input type="number"  placeholder="Number Of time" min={1} required 
                        value={value2}
                        onChange={(e)=>setValue4(e.target.value)}
                        
                    />
                    
                    <PieChart width={730} height={250}>
  <Tooltip contentStyle={{ backgroundColor: 'yellow' }} />
  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d"  label />
</PieChart>


      </div>
    </div>
  </div>
</div>
    </>
  )
}
export default Navbar
