import { requestFetch } from '../../utils/requestFetch';

export const addContract = (body: any) => (
    requestFetch({url: `api/v1/cft-definitions/add`, method: 'POST', body })
);
