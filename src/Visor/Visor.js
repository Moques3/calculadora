import React from 'react';
import "./Visor.css";

const Visor = ({resultado =0}) => {
    

    return ( 
        <div className="Visor">
            {resultado}

            
        </div>
     );
}
 
export default Visor;