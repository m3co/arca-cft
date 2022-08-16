import React, { useState } from "react";
import { updateContract } from "../Contract/ContractService";
import Select, { StylesConfig } from 'react-select';
import { ContractType } from "../types";

interface Props {
  obj: ContractType;
  valueField: string;
}
const SelectReportType: React.FC<Props> = ({
    valueField,
    obj
}) => {
    const [valueSelect, setValueSelect] = useState({value: valueField, label: valueField});

    const options = [
        {value: "Schedule", label: "Schedule"},
        {value: "MaterialTakeoff", label: "MaterialTakeoff"},
    ];

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
        input: (styles) => ({ ...styles}),
        placeholder: (styles) => ({ ...styles}),
        singleValue: (styles, { data }) => ({ ...styles }),
    };

    const onChangeSelectedOption = (e: any) => {
        setValueSelect(e);
        obj.ReportType = e.label;
        updateContract(JSON.stringify(obj));
    };

    return (
        <div className="select">
          <Select 
          options={options} 
          styles={colourStyles} 
          components={{ IndicatorSeparator:() => null }}
          value={valueSelect}
          onChange={onChangeSelectedOption}
          />
        </div>
    );
};

export default SelectReportType;
