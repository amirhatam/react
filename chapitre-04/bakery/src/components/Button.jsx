import React from 'react';



const Button = ({ name='Demo', onClick}) => {
   
     
      
        return (
                <button 
                        type="button" 
                        className="btn btn-outline-primary px-5" 
                        onClick={onClick} 
                >
                        {name}
                </button>
        );
};

export default Button;