import React from 'react';

// props => { stylesheetClass, click, selected, children }

const Button = ({ name='Demo', onClick, stylesheetClass, stylesheetElement}) => {
        const className = ["btn"];               
        const remoteClass = stylesheetClass;
        if (  remoteClass && remoteClass.length > 0 ){
                remoteClass.forEach(this_class => {
                        className.push(this_class);
                });
        }
      
        return (
                <button 
                        type="button" 
                        className="btn btn-outline-primary px-5" 
                        onClick={onClick} 
                        // style={styleObject}
                >
                        {name}
                </button>
        );
};

export default Button;