import { requestFetch } from '../../utils/requestFetch';


export const mainSearch = (value: string) => (
    requestFetch({ url: `api/v1/cft-definitions?search=${value}`, method: 'POST' })
);

export const getAllContracts = () => (
    requestFetch({ url: 'api/v1/cft-definitions/list', method: 'POST' })
);
