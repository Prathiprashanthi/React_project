import {Component} from 'react'
import './index.css'

class Body extends Component{
    render(){
        return (<div className="mainBody">
            <section className="py-5 overflow-hidden bg-primary" id="home">
        <div className="container">
          <div className="row flex-center">
            <div className="col-md-5 col-lg-6 order-0 order-md-1 mt-8 mt-md-0"><a className="img-landing-banner" href="#!"></a>      <div>
    <img src="images/7176459.png" className="card-img" alt="Description" />
  </div> </div>
            <div className="col-md-7 col-lg-6 py-8 text-md-start text-center">
              <h1 className="display-1 fs-md-5 fs-lg-6 fs-xl-8" >Are you Coding?</h1>
              <h1 className=" mb-2 fs-4" >Coding, also known as programming or software development, is the process of creating instructions for computers to execute. These instructions are written in programming languages, which are designed to communicate with computers and tell them how to perform specific tasks.<br className="d-none d-xxl-block" /></h1>
             
                  <nav>
                    <div className="tab-content mt-3" id="nav-tabContent">
                      <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="d-grid gap-3 col-sm-auto">
                          <button className="btn btn-danger" type="submit" >Read More</button>
                        </div>
                      </div>
                     
                    </div>
                  </nav>
                  
               
            </div>
          </div>
        </div>
      </section>
      <section className="py-3 py-md-5">
          <div className="container">
              <div className="row gy-3 gy-md-2 gy-lg-0 align-items-md-center">
                  <div className="col-8 col-md-6">
                      <img className="img-fluid rounded" loading="lazy" src="images/Work_4.jpg" alt="About2"/>
                  </div>
                  <div className="col-8 col-md-6">
                      <div className="row justify-content-xl-center">
                          <div className="col-12 col-xl-10">
                              <h2 className="mb-3">Why Choose Us?</h2>
                              <p className="lead fs-4 mb-3 mb-xl-5">With years of experience and deep industry knowledge, we have a proven track record of success and are constantly pushing ourselves to stay ahead of the curve.</p>
                              <div className="d-flex align-items-center mb-3">
                                  <div className="me-3 text-primary">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                      </svg>
                                  </div>
                                  <div>
                                      <p className="fs-5 m-0">Our evolution procedure is super intelligent.</p>
                                  </div>
                              </div>
                              <div className="d-flex align-items-center mb-3">
                                  <div className="me-3 text-primary">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                      </svg>
                                  </div>
                                  <div>
                                      <p className="fs-5 m-0">We deliver services beyond expectations.</p>
                                  </div>
                              </div>
                              <div className="d-flex align-items-center mb-4 mb-xl-5">
                                  <div className="me-3 text-primary">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                      </svg>
                                  </div>
                                  <div>
                                      <p className="fs-5 m-0">Let's hire us to reach your objectives.</p>
                                  </div>
                              </div>
                              <button type="button" className="btn bsb-btn-xl btn-outline-primary rounded-pill">Connect Now</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
        </div>
        )
    }
}

export default Body