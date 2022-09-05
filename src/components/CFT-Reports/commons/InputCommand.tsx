import React, { useState } from "react";
import { updateReport } from "../Report/ReportService";
import { ReportType, Filter } from "../types";

interface Props {
    obj: ReportType;
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
                    updateReport(JSON.stringify(obj));
                }
            }}
            disabled={obj.Processed}
            />
        </div>
    );
};

export default InputCommand;
