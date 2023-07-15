import React from 'react'
import './form.css'
function Form() {
  return (
    <div>
        
      <form>
        <div
        className='textform'
        >Drop us a line! We are here to answer your questions 24/7</div>
        <div className='formRow'>
        <div className='formDiv'>
            <input
            className='input'
            placeholder='Full Name'
            />
           
        </div>
        <div className='formDiv'>
            <input
            className='input'
            placeholder='Company'
            />
          
        </div>
        <div className='formDiv'>
            <input
            className='input'
            placeholder='Work Email'
            />
            
        </div>
        <div className='formDiv'>
            <input
            className='input'
            placeholder='Work Phone'
            />
            
        </div>
        </div>
        <div className='textarearDiv'>
            <textarea
            className='textArea'
            placeholder='How Can We Help You?'
            />
        </div>
        <div className='updloadArea'>
            <textarea
            className='updloadField'
            placeholder='Tab Here To Upload A file  '
            />
        </div>
        <div  >
        <button className='btn'
        >Submit</button>

        </div>
      </form>
    </div>
  )
}

export default Form
