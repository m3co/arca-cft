import { requestFetch } from '../../../utils/requestFetch';
import { ReportType } from '../types';

export const getSearchBuiltIn = (value: string) => (
    requestFetch({url: `api/v1/built-in-category?search=${value}`, method: 'POST' })
);

export const getSearchForOther = (value: string, report_type: string, builtIn: string) => (
    requestFetch({ url: `api/v1/fields?report_type=${report_type}&built_in_cateogry=${builtIn}&search=${value}`, method: 'POST' })
);

export const updateContract = (body: ReportType | string) => (
    requestFetch({ 
        url: `api/v1/cft-definitions/update`, 
        method: 'POST',
        body: body
     })
);

export const deleteReport = (body: ReportType | string) => (
    requestFetch({ 
        url: `api/v1/reports/remove`, 
        method: 'POST',
        body: body
     })
);

export const updateReport = (body: Body | string) => (
    requestFetch({url: `api/v1/reports/update`, method: 'POST', body })
);

export const addDefinition = (body: Body | string) => (
    requestFetch({url: `api/v1/reports/add/cft-definitions`, method: 'POST', body })
);
