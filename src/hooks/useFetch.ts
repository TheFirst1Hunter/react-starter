/* eslint-disable require-atomic-updates */
/* eslint-disable complexity */
import { useEffect, useState } from 'react';
import { httpClient } from '@lib';
import { useTokens } from '@hooks';

interface State<T> {
    data: T | null;
    error: Error | null;
    loading: boolean;
}

type RequestType = 'post' | 'get' | 'put' | 'patch' | 'delete';

/**
 * @param {string} url the API endpoint
 * @param {'post' | 'get' | 'put' | 'patch' | 'delete'}  requestType the request method
 * @param {boolean} authentication true/false
 * @param {object} body the data that is going to be sent
 * @param {'object' | 'formData' | 'nobody'} bodyDataType to set the content-type
 *
 * @returns {State<T>} {data, error, loading}
 */
export function useFetch<ResponseType, BodyType = unknown>(
    url: string,
    requestType: RequestType,
    authentication: boolean,
    body?: BodyType
): State<ResponseType> {
    const [requestState, setRequestState] = useState<State<ResponseType>>({
        data: null,
        error: null,
        loading: true,
    });

    // eslint-disable-next-line init-declarations
    let result: ResponseType;

    useEffect(() => {
        (async () => {
            if (authentication) {
                const { getAccessToken } = useTokens();
                try {
                    if (requestType === 'get' || requestType === 'delete')
                        result = await httpClient[requestType](url, {
                            headers: {
                                authorization: `Bearer ${getAccessToken()}`,
                            },
                        });
                    else {
                        if (!(body instanceof FormData))
                            result = await httpClient[requestType](url, body, {
                                headers: {
                                    authorization: `Bearer ${getAccessToken()}`,
                                },
                            });

                        if (body instanceof FormData)
                            result = await httpClient[requestType](url, body, {
                                headers: {
                                    authorization: `Bearer ${getAccessToken()}`,
                                    'Content-Type': `multipart/form-data`,
                                },
                            });
                    }

                    setRequestState({
                        data: result,
                        error: null,
                        loading: false,
                    });
                } catch (error: any) {
                    setRequestState({
                        data: null,
                        error: error,
                        loading: false,
                    });
                }
            }
            if (!authentication)
                try {
                    if (requestType === 'get' || requestType === 'delete')
                        result = await httpClient[requestType](url);
                    else {
                        result = await httpClient[requestType](url, body);

                        if (!(body instanceof FormData))
                            result = await httpClient[requestType](url, body);

                        // The body is a FormData
                        if (body instanceof FormData)
                            result = await httpClient[requestType](url, body, {
                                headers: {
                                    'Content-Type': `multipart/form-data`,
                                },
                            });
                    }

                    setRequestState({
                        data: result,
                        error: null,
                        loading: false,
                    });
                } catch (error: any) {
                    setRequestState({
                        data: null,
                        error: error,
                        loading: false,
                    });
                }
        })();
    }, []);

    return requestState;
}
