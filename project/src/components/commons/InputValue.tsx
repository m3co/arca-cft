import React, { useState, useEffect } from "react";
import { getSearchBuiltIn, updateContract } from "../Contract/ContractService";


const InputValue: React.FC<any> = ({
    obj,
    miniObj
}) => {
    const [value, setValue] = useState(miniObj.Value);

    return (
        <div className="input-box">
            <input type="text" 
            name="filter_command" 
            className="input-style" 
            required 
            placeholder="Value"
            value={value}
            onChange={event => setValue(event.target.value)}
            onKeyPress={event => {
                if (event.key === 'Enter') {
                    miniObj.Value = value;
                    updateContract(JSON.stringify(obj));
                }
            }}
            />
        </div>
    );
  };

  export default InputValue;
