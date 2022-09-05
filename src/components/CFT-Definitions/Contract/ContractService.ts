import { requestFetch } from '../../../utils/requestFetch';
import { ContractType } from '../types';

export const getSearchBuiltIn = (value: string) => (
    requestFetch({url: `api/v1/built-in-category?search=${value}`, method: 'POST' })
);

export const getSearchForOther = (value: string, report_type: string, builtIn: string) => (
    requestFetch({ url: `api/v1/fields?report_type=${report_type}&built_in_cateogry=${builtIn}&search=${value}`, method: 'POST' })
);

export const updateContract = (body: ContractType | string) => (
    requestFetch({ 
        url: `api/v1/cft-definitions/update`, 
        method: 'POST',
        body: body
     })
);

export const deleteContract = (body: ContractType | string) => (
    requestFetch({ 
        url: `api/v1/cft-definitions/remove`, 
        method: 'POST',
        body: body
     })
);
