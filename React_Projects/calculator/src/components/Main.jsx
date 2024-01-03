import React, { useState } from 'react';

const Main = () => {
    const [input, setInput] = useState('');

    const handleButtonClick = (value) => {
        setInput((prevInput) => prevInput + value);
    };

    const handleClear = () => {
        setInput('');
    };


    const handleDelete = () => {
        setInput((prevInput) => prevInput.slice(0, -1));
    };

    
    const handleEqual = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput('Error');
        }
        
    };
    const handlePercentage = () => {
        try {
            setInput((eval(input) / 100).toString());
        } catch (error) {
            setInput('Error');
        }
    };

    return (
        <div className="container text-center ">
            <div className="row">
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <div className="card " m-0 p-0>
                        <div className="card-body text-center item-center"> 
                            <div className="row g-3">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <input type="text" className="form-control  bg-secondary text-white" value={input} />
                                </div>
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <button className="btn btn-light  border " onClick={handleClear}>AC</button>
                                </div>
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <button className="btn btn-light border  btn-block">+/-</button>
                                </div>
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <button className="btn btn-light  border" onClick={()=> handlePercentage('%')}>%</button>
                                </div>
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <button className="btn btn-warning  border" onClick={() => handleButtonClick('/')}>/</button>
                                </div>
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <button className="btn btn-light  border" onClick={() => handleButtonClick('7')}>7</button>
                                </div>
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <button className="btn btn-light  border" onClick={() => handleButtonClick('8')}>8</button>
                                </div>
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <button className="btn btn-light  border" onClick={() => handleButtonClick('9')}>9</button>
                                </div>
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <button className="btn btn-warning  border " onClick={() => handleButtonClick('*')}>*</button>
                                </div>
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <button className="btn btn-light  border" onClick={() => handleButtonClick('4')}>4</button>
                                </div>
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <button className="btn btn-light  border" onClick={() => handleButtonClick('5')}>5</button>
                                </div>
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <button className="btn btn-light  border" onClick={() => handleButtonClick('6')}>6</button>
                                </div>
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <button className="btn btn-warning  border" onClick={() => handleButtonClick('-')}>-</button>
                                </div>
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <button className="btn btn-light  border" onClick={() => handleButtonClick('1')}>1</button>
                                </div>
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <button className="btn btn-light  border" onClick={() => handleButtonClick('2')}>2</button>
                                </div>
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <button className="btn btn-light  border" onClick={() => handleButtonClick('3')}>3</button>
                                </div>
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <button className="btn btn-warning  border" onClick={() => handleButtonClick('+')}>+</button>
                                </div>
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <button className="btn btn-light  border" onClick={() => handleButtonClick('0')}>0</button>
                                </div>
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <button className="btn btn-light  border" onClick={handleDelete}>Del</button>
                                </div>
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <button className="btn btn-light  border" onClick={() => handleButtonClick('.')}>.</button>
                                </div>
                                <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <button className="btn btn-warning  border" onClick={handleEqual}>=</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
