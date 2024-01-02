import React, { useState } from 'react';
import Nav from './Nav';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const submitForm = () => {
        if (!/^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(formData.email)) {
            alert('Please enter a valid email address');
            return;
        }
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <Nav />
            <br />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">Contact Form</div>
                            <div className="card-body">
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                        <label htmlFor="name" className="form-label">
                                            Name
                                        </label>
                                        <input type="text" className="form-control" id="name" name="name" onChange={handleChange} />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                        <label htmlFor="email" className="form-label">
                                            Email
                                        </label>
                                        <input
                                            type="email" className="form-control" id="email" name="email" onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                        <label htmlFor="message" className="form-label">
                                            Message:
                                        </label>
                                        <textarea name="message" id="message" cols="30" rows="10" className="form-control" onChange={handleChange}></textarea>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                        <button className="btn btn-primary" onClick={submitForm}>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`modal ${showPopup ? 'show' : ''}`} style={{ display: showPopup ? 'block' : 'none' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Form Data</h5>
                            <button type="button" className="close" onClick={handleClosePopup}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Name: {formData.name}</p>
                            <p>Email: {formData.email}</p>
                            <p>Message: {formData.message}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleClosePopup}>
                                Dismiss
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
