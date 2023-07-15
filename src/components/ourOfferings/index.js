import React, { useEffect, useState } from 'react'
import './styles.css'
import Application from './Application'
import Testing from './Testing'
import Software from './software'
import Design from './Design'


function OurOfferings() {
  const [active, setActive] = useState('software')
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Conditional rendering based on the width value


  return (
    <div className='section'>
      {width>414? 
      <div>
      <div className="h2">
        <span id="Services" className="not-hover-link" name="Services">Explore Our Offering</span>
        </div>
        <ul className='a-service'>
                    <div className="a-services_">
            <div>
            <button onClick={()=>setActive('software')} className="a-services__tabs-label" style={{transition:'none'}}>
            <p>Software Development </p>
            </button>
            </div>
            <div >
            <button onClick={()=>setActive('testing')} data-slide-index="1" href="#" className="a-services__tabs-label" style={{transition:'none'}}>
            <p>Testing &amp; QA</p>
            </button>
            </div>
            <div>
            <button onClick={()=>setActive('service')} data-slide-index="2" href="#" className="a-services__tabs-label" style={{transition:'none'}}>
            <p>Application Services</p>
            </button>
            </div>
            <div >
            <button onClick={()=>setActive('design')} data-slide-index="3" href="#" className="a-services__tabs-label" style={{transition:'none'}}>
            <p>UX/UI Design</p>
            </button>
            </div>
            <div >
            <button onClick={()=>setActive('consulting')} data-slide-index="4" href="#" className="a-services__tabs-label" style={{transition:'none'}}>
            <p>IT Consulting</p>
            </button>
            </div>
            <div>
            <button onClick={()=>setActive('data')} data-slide-index="5" href="#" className="a-services__tabs-label" style={{transition:'none'}}>
            <p>Data Analytics</p>
            </button>
            </div>
            <div>
            <button onClick={()=>setActive('desk')} data-slide-index="6" href="#" className="a-services__tabs-label" style={{transition:'none'}}>
            <p>Help Desk Services</p>
            </button>
            </div>
            
            
            </div>
            <div  className=''>
                <div className='second'>
               {active === 'software' && <Software/>}
               {active === 'testing' && <Testing/>}
               {active === 'service' && <Application/>}
               {active === 'design' && <Design/>}
           

                </div>
            </div>
        </ul>
        <div className='service_section'>
            <div className='section_b'></div>
        </div>
        </div>
      : <div>
        
        hello world
        </div>}
    </div>
  )
}

export default OurOfferings
