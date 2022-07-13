import React from 'react'
function Foot() {
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-12 col-xxl-3 mt-5">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title"><span><i className="fa fa-users fa-1x"></i></span><b> New User</b></h5>
                            <p className="card-text card_a_title">hubx<br></br>
                            <small className="text-muted">20 days ago</small>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-12 col-xxl-4 col_xxl_list mt-5">
               
                    <div className="list-group list-group1 ">
                    <h3 className='list-group2'><b>How to sell Courses Blog</b><span> see all</span></h3>
                    <a href="#" className="list-group-item list-group-item-action list-group1">
                          <div className="d-flex w-100 justify-content-between">
                          <p className="mb-1">With supporting text below as  </p>
                            <small className="text-muted text-muted1">3 days ago</small>
                          </div>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action list-group1">
                          <div className="d-flex w-100 justify-content-between">
                          <p className="mb-1">With supporting text below as  </p>
                            <small className="text-muted text-muted1">7 days ago</small>
                          </div>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action list-group1">
                          <div className="d-flex w-100 justify-content-between">
                          <p className="mb-1">With supporting text below as  </p>
                            <small className="text-muted text-muted1">12 days ago</small>
                          </div>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action list-group1">
                          <div className="d-flex w-100 justify-content-between">
                          <p className="mb-1">With supporting text below as  </p>
                            <small className="text-muted text-muted1">20 days ago</small>
                          </div>
                        </a>
                      </div>
                </div>
                <div className="col-lg-3 col-md-3 col-12 col-xxl-3 mt-5">
                    <div className="card ">
                        <div className="card-body ">
                            <h5 className="card-title"><span><i className="fa fa-line-chart fa-1x"></i></span><b> Events Log</b><span className='card_hux'> see all</span></h5>
                            <a href="#" className="list-group-item list-group-item-action list-group2">
                          <div className="d-flex w-100 justify-content-between list-group2">
                          <p className="mb-1 card_hux1">Hubx</p>
                         
                            <small className="text-muted text-muted1">20 days ago</small>
                          
                          </div>
                          <p className="mb-1 ">Logged in</p>
                          <p className="mb-1 card_hux1">more info</p>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Foot