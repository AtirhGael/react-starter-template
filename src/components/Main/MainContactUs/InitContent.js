import React, { useState } from 'react';
import '../../../resources/style/scss/main.scss';
import './twemoji-awesome.css';

export default function InitContent() {

    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);
    

    function close() {
        setShowModal(false);
        setTimeout(function () {
            window.location.href = "/";
        }, 1000);
    }

    function submit(e) {
        e.preventDefault();
        let xhr = new XMLHttpRequest();
        let form = e.target;
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            setError('');
            if (xhr.status === 200) {
                form.reset();
                setShowModal(true)
            } else {
                setError('Oops! something wrong happened. Check your Informations')
            }
        };
        xhr.send(new FormData(form));
    }

    return (
        <div id="contact">
            <div className="wrapper top">
                <div className="socials">
                </div>
                <div className="contact-form">
                    <h3 className="text-primary">Let's Work Together</h3>
                    <form id="form" onSubmit={submit} action="https://formspree.io/mdowveog" method="POST">
                        <div id="error">{error}</div>
                        <label>
                            Email Address 
                            <input required type="text" name="email" placeholder="company@email.com" />
                        </label>
                        <label>
                            Company Name
                            <input required type="text" name="name" placeholder="Full Name"/>
                        </label>
                        <label>
                            Message 
                            <textarea required name="message" placeholder="How can we help you ?"></textarea>
                        </label>
                        <input type="text" name="_gotcha" style={{display: 'none'}} />
                        <button type="submit" className="btn btn-full">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <div id="confirmation-modal" style={{ display: showModal ? 'block' : 'none' }} className="modal">
                <div className="modal-wrapper">
                    <div className="modal-container">
                        <div className="modal-body">
                            <div className="icon"></div>
                            <h4 className="modal-body-title" >Mail Sent!</h4>
                            <p className="modal-body-text">
                                <p> Thanks For Contacting US. </p> 
                                <p> We Will Get Back To You Soon !!! </p> 
                                <i class="twa twa-rocket" /> <i class="twa twa-rocket" /> <i class="twa twa-rocket" />
                            </p>
                            <button id="modal-body-button" onClick={close} className="btn btn-full close">Okay</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
