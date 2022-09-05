import { requestFetch } from '../../../utils/requestFetch';

export const getAllReports = () => (
    requestFetch({ url: 'api/v1/reports', method: 'POST' })
);
