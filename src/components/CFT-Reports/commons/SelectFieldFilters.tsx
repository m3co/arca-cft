import React, { useState } from "react";
import { getSearchForOther, updateContract } from "../Report/ReportService";
import AsyncSelect from 'react-select/async';
import { StylesConfig } from 'react-select';
import { ReportType, Filter } from "../types";

interface Props {
  obj: ReportType;
  valueField: string;
  miniObj: Filter;
}

const SelectFieldFilters: React.FC<Props> = ({
    valueField,
    obj,
    miniObj
}) => {
    const [valueSelect, setValueSelect] = useState({value: valueField, label: valueField});

    const getModelsAPI = async (input: string) => {
        if (!input) {
            return Promise.resolve({ options: [] });
        }
        const json = await getSearchForOther(input, obj.ReportType, obj.BuiltInCategory);
        const formatted = json.map((l: string)=> ({
            value: l,
            label: l
        }))
        return formatted;
    }

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
        miniObj.Field = e.label;
        updateContract(JSON.stringify(obj));
    };

    return (
        <div className="select">
            <AsyncSelect 
            loadOptions={getModelsAPI} 
            styles={colourStyles} 
            components={{ IndicatorSeparator:() => null, DropdownIndicator:() => null }}
            value={valueSelect}
            onChange={onChangeSelectedOption}
            isDisabled={true}
            />
        </div>
    );
};

export default SelectFieldFilters;
