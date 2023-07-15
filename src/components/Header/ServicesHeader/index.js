import React from 'react'
import './service.css'

function ServiceHeader() {
  return (
    <div>
      <div className=" icp-header-container">
        <div className="icp-header">
        <h1 className="">
        Software Development Services
        </h1>   
        <p className="icp-accented-header">Our Passion is to Deliver Software that Helps You Succeed</p>
        <div className="icp-header-phrase">
        <p className='text'>Combining over 30 years of experience in IT and a great drive for innovation, ScienceSoft designs and builds software to rely on: secure, high-performing, scalable, and user-friendly.</p>
        </div>
        <div className="icp-header-link-wrapper">
        <button href="https://www.scnsoft.com/pricing/software-type" className="icp-header-link no-arrow" >
        Get a custom quote
        </button>
        <button href="/software-development/costs/configurator" className="icp-header-link-2">
        Request software development
        </button>
        </div>
        <div className="icp-header-mobile-image-wrapper ">
        <img width="617" height="401" src="/software-development-services/software-development/cro/cover-pic-sw-development.svg" title="Software Development Services - ScienceSoft" alt="Software Development Services - ScienceSoft"/>
        </div>
        </div>
        <div className="icp-header-image-wrapper ">
        <img width="617" height="401" src="https://www.scnsoft.com/software-development-services/software-development/cro/cover-pic-sw-development.svg"/>
        </div>
        </div>
    </div>
  )
}

export default ServiceHeader
