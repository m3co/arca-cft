import React, { useState } from "react";
import { updateCFT } from "../CFTsService";
import { CFTType, Filter } from "../types";

interface Props {
    obj: CFTType;
    valueField: string;
}

const InputPhase: React.FC<Props> = ({
    obj,
    valueField
}) => {
    const [value, setValue] = useState(valueField);

    return (
        <div className="input-box" style={{marginRight: 35, height: 38}}>
            <input type="text" 
            name="phase" 
            className="input-style" 
            required 
            placeholder="Value"
            style={{width: 200, boxSizing: 'border-box'}}
            value={value}
            onChange={event => setValue(event.target.value)}
            onKeyPress={event => {
                if (event.key === 'Enter') {
                    obj.Phase = value;
                    updateCFT(JSON.stringify(obj));
                }
            }}
            />
        </div>
    );
};

export default InputPhase;
