import { requestFetch } from '../../../utils/requestFetch';

export const mainSearch = (value: string) => (
    requestFetch({ url: `api/v1/cft-definitions?search=${value}`, method: 'POST' })
);

export const getAllReports = () => (
    requestFetch({ url: 'api/v1/reports/list', method: 'POST' })
);
