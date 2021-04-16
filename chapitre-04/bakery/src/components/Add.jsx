import React from 'react';

import Button from './Button';

import Slider from './core/Slider';



const Add = ({ name='Demo', onClick, inputForm, inputSlider, slider }) => {
  
  return(    
    <>
        <div className="input-group my-3 offset-3 col-6">
          <input onChange={inputForm} type="text" className="form-control" />
          <div className="input-group-append">
            <Button onClick={onClick} name={name} stylesheetClass={["btn-primary"]} stylesheetElement={{width: "auto"}} />
          </div>   
        </div>
        <p className="d-flex  offset-3 col-6 mb-3">
            <span className="ml-1">€</span> <span className="mr-1">{slider}</span>
          </p>
          <div className="offset-3 col-6 ps-4">
          <Slider
          min={1} 
          max={10} 
          onChange={inputSlider} 
          value={slider} 
          />
          </div>

    </>
  );
};
export default Add;