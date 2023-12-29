import React, { useState } from 'react';
import Nav from './Nav';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
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
        // Convert formData to JSON string
        // const jsonString = JSON.stringify(formData, null, 2);

        // Display JSON in popup
        setShowPopup(true);
    };

    const dismissPopup = () => {
        setShowPopup(false);
    };

    return (
        <div>
            <Nav />
            <br />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="card">
                            <div className="card-header">Contact Form</div>
                            <div className="card-body">
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                        <label htmlFor="name" className="form-label">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                        <label htmlFor="email" className="form-label">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                        <label htmlFor="message" className="form-label">
                                            Message:
                                        </label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            cols="30"
                                            rows="10"
                                            className="form-control"
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                        <button
                                            className="btn btn-primary"
                                            onClick={submitForm}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showPopup && (
                <div className="popup-container">
                    <div className="overlay" onClick={dismissPopup}></div>
                    <div className="popup">
                        <div className="popup-header">
                            <h2>Form Data</h2>
                        </div>
                        <div className="popup-content">
                            <pre>{JSON.stringify(formData, null, 2)}</pre>
                        </div>
                        <div className="popup-footer">
                            <button className="btn btn-secondary" onClick={dismissPopup}>
                                Dismiss
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
