import { requestFetch } from '../../utils/requestFetch';



export const getAllContracts = () => (
    requestFetch({ url: 'api/v1/cft-definitions/list', method: 'POST' })
);