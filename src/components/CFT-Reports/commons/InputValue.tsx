import React, { useState } from "react";
import { updateContract } from "../Contract/ContractService";
import { ContractType, Filter } from "../types";

interface Props {
    obj: ContractType;
    miniObj: Filter;
}

const InputValue: React.FC<Props> = ({
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
            disabled            />
        </div>
    );
};

export default InputValue;
