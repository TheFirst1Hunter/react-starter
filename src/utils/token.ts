/**
 *@returns {function}  getAccessToken(), getRefreshToken(), setAccessToken(), setRefreshToken()
 */
export default function tokens() {
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
        setAccessToken: saveAccessToken,
        setRefreshToken: saveRefreshToken,
        getAccessToken,
        getRefreshToken,
    };
}

export const logout = (): void => {
    localStorage.clear();
    window.location.reload();
};
