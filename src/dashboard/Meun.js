import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import React from 'react'
const pdata = [
  {
    name: 'Python',
    student: 13,
    fees: 10
  },
  {
    name: 'Javascript',
    student: 15,
    fees: 12
  },
  {
    name: 'PHP',
    student: 5,
    fees: 10
  },
  {
    name: 'Java',
    student: 10,
    fees: 5
  },
  {
    name: 'C#',
    student: 9,
    fees: 4
  },
  {
    name: 'C++',
    student: 10,
    fees: 8
  },
];
function Meun() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-12 col-xxl-8">
            <ul className="nav ">
              <li className="nav-item nav-item1">
                <a className="nav-link active" aria-current="page" href="#">Active</a>
              </li>
              <div className='ul_center'>
                <li className="nav-item">
                  <a className="nav-link" href="#">New Signups</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Revenue</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Product Sales</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Active Learners</a>
                </li>
              </div>
            </ul>
          </div>
          <br></br>
          <div className="col-lg-8 col-md-8 col-12 col-xxl-8 d-flex">
          <ResponsiveContainer width="200%" aspect={3}>
        <LineChart data={pdata} width={1000} height={300}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value) => value + " Programming"} />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: 'yellow' }} />
          <Legend />
          <Line type="monotone" dataKey="student" stroke="red" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="fees" stroke="green" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
          </div>
          <div className="col-lg-4 col-md-4 col-12 col-xxl-4 d-flex">
          <div className="flex  flex-col w-fit  Main_item">
              <div className="flex mr-[0px] justify-between">
                      <div className='Main_item_add'>
                        <center><i className="fa fa-users fa-2x"></i></center>
                        <center><p className='Main_item_add_text'>User</p></center>
                        <center><p className='Main_item_add_text_num'>1</p></center>
                      </div>
                      <div className='Main_item_add'>
                        <center><i className="fa fa-refresh fa-2x"></i></center>
                        <center><p className='Main_item_add_text'>Conversions</p></center>
                        <center><p className='Main_item_add_text_num'>0<span>%</span> </p></center>
                      </div>
                      <div className='Main_item_add'>
                        <center><i className="fa fa-shopping-bag fa-2x"></i></center>
                        <center><p className='Main_item_add_text'>30 days sales</p></center>
                        <center><p className='Main_item_add_text_num'>0</p></center>
                      </div>
              </div>
              <div className="flex mr-[0px] justify-between flex_r">
                      <div className='Main_item_add'>
                        <center><i className="fa fa-clock-o fa-2x"></i></center>
                        <center><p className='Main_item_add_text'>Avg time</p></center>
                        <center><p className='Main_item_add_text_num'>0 <span>min</span> </p></center>
                      </div>
                      <div className='Main_item_add'>
                        <center><i className="fa fa-file-o fa-2x"></i></center>
                        <center><p className='Main_item_add_text'>Coures</p></center>
                        <center><p className='Main_item_add_text_num'>0</p></center>
                      </div>
                      <div className='Main_item_add'>
                        <center><i className="fa fa-link fa-2x"></i></center>
                        <center><p className='Main_item_add_text'>Coures Categories</p></center>
                        <center><p className='Main_item_add_text_num'>0</p></center>
                      </div>
              </div>
                

            </div>
          </div>
          </div>
        </div>
      
    </>
  )}

export default Meun