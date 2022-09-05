import React, { useState } from "react";
import { updateCFT } from "../CFTsService";
import { CFTType, Filter } from "../types";

interface Props {
    obj: CFTType;
    valueField: string;
}

const InputType: React.FC<Props> = ({
    obj,
    valueField
}) => {
    const [value, setValue] = useState(valueField);

    return (
        <div className="input-box" style={{height: 38}}>
            <input type="text" 
            name="family" 
            className="input-style" 
            required 
            style={{width: 200, boxSizing: 'border-box'}}
            placeholder="type"
            value={value}
            onChange={event => setValue(event.target.value)}
            onKeyPress={event => {
                if (event.key === 'Enter') {
                    obj.Phase = value;
                    updateCFT(JSON.stringify(obj));
                }
            }}
            disabled
            />
        </div>
    );
};

export default InputType;
