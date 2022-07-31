/**
 * @return {object} [getAccessToken, saveAccessToken, getRefreshToken, saveRefreshToken]
 */
export default function useTokens() {
    const getAccessToken = (): string | null => {
        const tokenString = localStorage.getItem('access-token');
        return tokenString;
    };

    const getRefreshToken = (): string | null => {
        const tokenString = localStorage.getItem('refresh-token');
        return tokenString;
    };

    const saveAccessToken = (userToken: string) => {
        localStorage.setItem('access-token', userToken);
    };

    const saveRefreshToken = (userToken: string) => {
        localStorage.setItem('refresh-token', userToken);
    };

    return {
        getAccessToken,
        setAccessToken: saveAccessToken,
        getRefreshToken,
        setRefreshToken: saveRefreshToken,
    };
}
