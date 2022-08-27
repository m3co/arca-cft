import { requestFetch } from '../../utils/requestFetch';

interface Body {
    ContractType: string;
}
export const addContract = (body: Body | string) => (
    requestFetch({url: `api/v1/cft-definitions/add`, method: 'POST', body })
);
