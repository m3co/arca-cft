interface RequestFetchProps {
  url: string;
  method: 'POST' | 'GET' | 'DELETE' | 'PUT';
  body?: any;
  headers?: object;
  type?: 'json' | 'text' | 'blob' | 'arrayBuffer' | 'arrayBuffer';
  mode?: "no-cors" | "cors" | "navigate" | "same-origin" | undefined;
}

type RequestFetch = <P = any>(parametrs: RequestFetchProps) => Promise<P>;

export const requestFetch: RequestFetch = async ({
  url,
  method,
  body,
  headers,
  type = 'json',
}) => {
  try {
    const answer = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body
    })
    if (answer.status === 409) {
      throw new Error('status409');
    }
    if (answer.status === 404) {
      throw new Error('status404');
    }
    if (answer.status === 406) {
      throw new Error('status406');
    }
    const string = await answer[type]();
    
    return string;
   
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};
