import React, { useState } from "react";
import { updateContract } from "../Report/ReportService";
import { ReportType, Filter } from "../types";

interface Props {
    obj: ReportType;
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
