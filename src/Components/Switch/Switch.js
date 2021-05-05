import React from'react';
import './Switch.css'

const Switch = ({value})=>{
   
    return(
        <div className="inputwrapper">
       <input type="checkbox" className="Input" checked={value} />
      
        </div>
     
    )
}

export default Switch;