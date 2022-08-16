import React, { useState } from "react";
import { updateContract } from "../Contract/ContractService";
import { ContractType, Filter } from "../types";

interface Props {
    obj: ContractType;
    miniObj: Filter;
}

const InputCommand: React.FC<Props> = ({
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
