import { useEffect, useState } from 'react';
import { httpClient } from '@lib';
import { useTokens } from '@hooks';

interface State<T> {
    data: T | null;
    error: Error | null;
    loading: boolean;
}

type RequestType = 'post' | 'get' | 'put' | 'patch' | 'delete';

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

    let result: ResponseType;

    useEffect(() => {
        (async () => {
            if (authentication) {
                const { getAccessToken } = useTokens();
                try {
                    if (requestType === 'get' || requestType === 'delete') {
                        result = await httpClient[requestType](url, {
                            headers: {
                                authorization: `Bearer ${getAccessToken()}`,
                            },
                        });
                    } else {
                        result = await httpClient[requestType](url, body, {
                            headers: {
                                authorization: `Bearer ${getAccessToken()}`,
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
            if (!authentication) {
                try {
                    if (requestType === 'get' || requestType === 'delete') {
                        result = await httpClient[requestType](url);
                    } else {
                        result = await httpClient[requestType](url, body);
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
        })();
    }, []);

    return requestState;
}
