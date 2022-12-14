import React, { useState } from "react";
import { updateContract } from "../Report/ReportService";
import Select, { StylesConfig } from 'react-select';
import { Filter, ReportType } from "../types";

interface Props {
  obj: ReportType;
  valueField: string;
  miniObj: Filter;
}

const SelectComparator: React.FC<Props> = ({
    valueField,
    obj,
    miniObj
}) => {
    const [valueSelect, setValueSelect] = useState({value: valueField, label: valueField});

    const options = [
        {value: "HasParameter", label: "HasParameter"},
        {value: "Equal", label: "Equal"},
        {value: "NotEqual", label: "NotEqual"},
        {value: "GreaterThan", label: "GreaterThan"},
        {value: "GreaterThanOrEqual", label: "GreaterThanOrEqual"},
        {value: "LessThan", label: "LessThan"},
        {value: "LessThanOrEqual", label: "LessThanOrEqual"},
        {value: "Contains", label: "Contains"},
        {value: "NotContains", label: "NotContains"},
        {value: "BeginsWith", label: "BeginsWith"},
        {value: "NotBeginsWith", label: "NotBeginsWith"},
        {value: "EndsWith", label: "EndsWith"},
        {value: "NotEndsWith", label: "NotEndsWith"},
        {value: "IsAssociatedWithGlobalParameter", label: "IsAssociatedWithGlobalParameter"},
        {value: "IsNotAssociatedWithGlobalParameter", label: "IsNotAssociatedWithGlobalParameter"},
    ]

    const colourStyles: StylesConfig<any> = {
        control: (styles, {isDisabled}) => ({ ...styles, 
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
            '& div': {
              color: isDisabled ? 'rgb(51, 51, 51)' : 'rgb(51, 51, 51)',
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
        miniObj.Comparator = e.label;
        updateContract(JSON.stringify(obj));
    };

  return (
      <div className="select">
        <Select 
        options={options} 
        styles={colourStyles} 
        components={{ IndicatorSeparator:() => null, DropdownIndicator:() => null }}
        value={valueSelect}
        onChange={onChangeSelectedOption}
        isDisabled={true}
        />
      </div>
  );
};

export default SelectComparator;
