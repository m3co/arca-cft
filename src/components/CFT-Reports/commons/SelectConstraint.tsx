import React, { useState } from "react";
import { getSearchForOther, updateContract } from "../Contract/ContractService";
import Select from 'react-select';
import { StylesConfig } from 'react-select';
import { ContractType } from "../types";

interface Props {
  obj: ContractType;
  valueConstraint: any;
  setValueConstraint: any;
}

const SelectConstraint: React.FC<Props> = ({
    setValueConstraint,
    obj,
    valueConstraint
}) => {
   
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
        setValueConstraint(e);
    };

    const formatted = obj.Fields.map((l: string)=> ({
        value: l,
        label: l
    }))
    return (
        <div className="select">
            <Select 
            options={formatted} 
            styles={colourStyles} 
            components={{ IndicatorSeparator:() => null }}
            value={valueConstraint}
            onChange={onChangeSelectedOption}
            />
        </div>
    );
};

export default SelectConstraint;
