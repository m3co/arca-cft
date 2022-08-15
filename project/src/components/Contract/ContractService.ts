import { requestFetch } from '../../utils/requestFetch';



export const getSearchBuiltIn = (value: string) => (
    requestFetch({ url: `api/v1/built-in-category?search=&{value}`, method: 'POST' })
);
