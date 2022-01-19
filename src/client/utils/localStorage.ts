export const getLocalStorage = (key: string) => {
    const data = localStorage.getItem(key);

    if (data !== null) {
        return JSON.parse(data as string);
    }

    return {};
}

export const setLocalStorage = (key: string, data: {}) => {
    localStorage.setItem(key, JSON.stringify(data));
}