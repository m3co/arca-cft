import React, { useState, useEffect } from "react";
import { getSearchBuiltIn, getSearchForOther, updateContract } from "../Contract/ContractService";
import AsyncSelect from 'react-select/async';
import Select, { StylesConfig } from 'react-select';

const SelectKeynote: React.FC<any> = ({
    value5,
    obj
}) => {
    const [value1, setValue] = useState({value:value5, label: value5});
    const promiseOptions = (inputValue: string) => {
        if(value1.value && inputValue !== value1.value) {
            return new Promise<any[]>((resolve) => {
                setTimeout(() => {
                    getSearchForOther(inputValue, obj.ReportType, obj.BuiltInCategory)
                    .then(( res ) => {
                        resolve(
                        res?.map((str: any, id: any) => ({
                            value: str,
                            label: str
                        }))
                        )
                    })
                }, 1000);
            });
        }
    }

    useEffect(() => {
        console.log(obj)
        
    }, [obj]);

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
        dropdownIndicator: (styles) => ({ ...styles, fill: 'rgb(100, 116, 139)', "svg": {
            fill: "rgb(100, 116, 139)"
          }}),
        input: (styles) => ({ ...styles}),
        placeholder: (styles) => ({ ...styles}),
        singleValue: (styles, { data }) => ({ ...styles }),
    };

    const onChangeSelectedOption = (e: any) => {
        setValue(e);
        obj.KeynoteField = e.label;
        updateContract(JSON.stringify(obj));
    };

    return (
      <div className="select">
        <AsyncSelect 
        loadOptions={promiseOptions} 
        styles={colourStyles} 
        components={{ IndicatorSeparator:() => null }}
        value={value1}
        onChange={onChangeSelectedOption}
        />
      </div>
    );
  };

  export default SelectKeynote;