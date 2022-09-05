import React, { useState } from "react";
import { getSearchKey, updateCFT } from "../CFTsService";
import AsyncSelect from 'react-select/async';
import { StylesConfig } from 'react-select';
import { CFTType } from "../types";
import sleep from "../../../utils/sleep";

interface Props {
    obj: CFTType;
    valueField: string;
}

const SearchSelectKey: React.FC<Props> = ({
    valueField,
    obj
}) => {
    const [valueSelect, setValueSelect] = useState({value: valueField, label: valueField});
    


    const getModelsAPI = async (input: string) => {
        if (!input) {
            return Promise.resolve({ options: [] });
        }
        const json: any = await sleep(getSearchKey, input);
        const formatted = json.map((l: any)=> ({
            value: l.Key,
            label: l.Key + ' ' + l.Description + l.Units
        }))
        return formatted;
    }

    const valueForSelectWithTooltip = {
        value: valueSelect.value,
        label: (
            <span>
                {valueSelect.label}
            </span>
        )
    }
    
    const colourStyles: StylesConfig<any> = {
        control: (styles) => ({ ...styles, 
            backgroundColor: 'white', 
            fontSize: 14, 
            borderColor: '#E7EAEE',
            cursor: 'pointer',
            width: 200,
            ':hover': {
                borderColor: '#047857',
                transition: 'all 0.3s',
                color: '#047857'
            },
            ':active': {
                borderColor: 'rgba(100, 116, 139, 0.81)',
            },
        }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          return {
            ...styles,
            borderColor: isFocused ? 'rgba(100, 116, 139, 0.81)' : '#047857',
      
            ':active': {
                borderColor: 'rgba(100, 116, 139, 0.81)',
            },
          };
        },
        dropdownIndicator: (base, state) => ({
            ...base,
            fill: 'rgb(100, 116, 139)', 
            "svg": {
                fill: "rgb(100, 116, 139)"
              },
            transition: 'all .2s ease',
            transform: state.isFocused ? 'rotate(180deg)' : undefined
        }),
        input: (styles) => ({
            ...styles,
        }),
        placeholder: (styles) => ({ ...styles}),
        singleValue: (styles) => ({ 
            ...styles,
        }),
    };

    const onChangeSelectedOption = (e: any) => {
        setValueSelect(e);
        obj.Key = e.value;
        updateCFT(JSON.stringify(obj));
    };

    return (
      <div className="select" style={{marginRight: 35}}>
        <AsyncSelect 
        loadOptions={getModelsAPI} 
        styles={colourStyles} 
        components={{ IndicatorSeparator:() => null }}
        value={valueForSelectWithTooltip}
        onChange={onChangeSelectedOption}
        />
      </div>
    );
  };

  export default SearchSelectKey;
