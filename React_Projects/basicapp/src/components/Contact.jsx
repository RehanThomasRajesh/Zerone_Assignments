import Nav from "./Nav";
<head>
    
</head>
const Contact= () =>{
    return(



    <div><Nav></Nav><br /><br />
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="card">
                        <div className="card-header">Contact Form</div>
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6"><label htmlFor="" className="form-label">Name</label><input type="text" className="form-control" /></div>
                                <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6"><label htmlFor="" className="form-label">Email</label><input type="email" className="form-control" /></div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"><label htmlFor="" className="form-label">Message:</label><textarea name="" id="" cols="30" rows="10" className="form-control"></textarea></div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"><button className="btn btn-primary">Submit</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};
export default Contact;