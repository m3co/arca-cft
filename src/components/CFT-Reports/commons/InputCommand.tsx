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
    return (
        <div className="input-box">
            <input type="text" 
            name="filter_command" 
            className="input-style" 
            placeholder="Command"
            disabled
            />
        </div>
    );
};

export default InputCommand;
