import { useEffect, useState } from 'react';
import { httpClient } from '@lib';
import { useTokens } from '@hooks';

interface State<T> {
    data: T | null;
    error: Error | null;
    loading: boolean;
}

type RequestType = 'post' | 'get' | 'put' | 'patch' | 'delete';
type BodyDataType = 'object' | 'formData' | 'nobody';

export function useFetch<ResponseType, BodyType = unknown>(
    url: string,
    requestType: RequestType,
    authentication: boolean,
    body?: BodyType,
    bodyDataType?: BodyDataType
): State<ResponseType> {
    const [requestState, setRequestState] = useState<State<ResponseType>>({
        data: null,
        error: null,
        loading: true,
    });

    let result: ResponseType;

    if (bodyDataType === 'formData' && !(body instanceof FormData)) {
        throw Error(
            'argument "bodyDataType" is set to a formData but received a body of another type'
        );
    }
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
                        if (bodyDataType === 'object') {
                            result = await httpClient[requestType](url, body, {
                                headers: {
                                    authorization: `Bearer ${getAccessToken()}`,
                                },
                            });
                        }
                        if (bodyDataType === 'formData') {
                            result = await httpClient[requestType](url, body, {
                                headers: {
                                    authorization: `Bearer ${getAccessToken()}`,
                                    'Content-Type': `multipart/form-data`,
                                },
                            });
                        }
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

                        if (bodyDataType === 'object') {
                            result = await httpClient[requestType](url, body);
                        }
                        // The body is a FormData
                        if (bodyDataType === 'formData') {
                            result = await httpClient[requestType](url, body, {
                                headers: {
                                    'Content-Type': `multipart/form-data`,
                                },
                            });
                        }
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
