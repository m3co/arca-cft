import React, { useState, useEffect } from "react";
import { getSearchBuiltIn, updateContract } from "../Contract/ContractService";


const InputCommand: React.FC<any> = ({
    obj,
    miniObj
}) => {
    const [valueCommand, setValueCommand] = useState(miniObj.Command);

    return (
        <div className="input-box">
            <input type="text" 
            name="filter_command" 
            className="input-style" 
            required 
            placeholder="Command"
            value={valueCommand}
            onChange={event => setValueCommand(event.target.value)}
            onKeyPress={event => {
                if (event.key === 'Enter') {
                    miniObj.Command = valueCommand;
                    updateContract(JSON.stringify(obj));
                }
            }}
            />
        </div>
    );
  };

  export default InputCommand;
