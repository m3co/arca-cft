import { requestFetch } from '../../utils/requestFetch';
import { CFTType } from './types';

export const getAllCFTs = () => (
    requestFetch({ url: 'api/v1/cft', method: 'POST' })
);

export const updateCFT = (body: CFTType | string) => (
    requestFetch({ 
        url: `api/v1/cft/update`, 
        method: 'POST',
        body: body
     })
);

export const getSearchBuiltIn = (value: string) => (
    requestFetch({url: `api/v1/built-in-category?search=${value}`, method: 'POST' })
);

export const getSearchKey = (value: string) => (
    requestFetch({url: `api/v1/aau?search=${value}`, method: 'POST' })
);

export const getSearchForOther = (value: string, report_type: string, builtIn: string) => (
    requestFetch({ url: `api/v1/fields?report_type=${report_type}&built_in_cateogry=${builtIn}&search=${value}`, method: 'POST' })
);

export const deleteCFT = (body: CFTType | string) => (
    requestFetch({ 
        url: `api/v1/cft/remove`, 
        method: 'POST',
        body: body
     })
);

export const addCFT = (body: Body | string) => (
    requestFetch({url: `api/v1/cft/add`, method: 'POST', body })
);

export const mainSearch = (value: string) => (
    requestFetch({ url: `api/v1/cft?search=${value}`, method: 'POST' })
);
