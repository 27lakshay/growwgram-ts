const CACHE_INTERVAL = 60 * 1000; // 1 minute

export const removeCache = (key: any) => {
    try {
        if (key) {
            localStorage.removeItem(key);
            return;
        }
        localStorage.clear();
    } catch (e) {
        console.log(e);
    }
};

export const setLocalData = (key: any, val: any) => {
    try {
        localStorage.setItem(key, JSON.stringify(val));
        return;
    } catch (e) {
        console.log(e);
    }
};

export const getLocalData = (key: any) => {
    try {
        let localData = localStorage.getItem(key);
        let validatedData = validateData(localData);
        // debugger;
        if (validatedData.isValid) {
            return validatedData.data;
        }
        localStorage.removeItem(key);
        return null;
    } catch (e) {
        console.log(e);
    }
};

export const validateData = (localData: any) => {
    try {
        if (localData === null) return { isValid: false };

        let dataRetrieved = JSON.parse(localData);
        // debugger;
        if (Number.isNaN(dataRetrieved.timestamp)) return { isValid: false };

        let date = new Date(dataRetrieved.timestamp);
        if (date.toString() === "Invalid Date") return { isValid: false };

        if (Date.now() - date.getTime() < CACHE_INTERVAL) {
            return {
                isValid: true,
                data: dataRetrieved,
            };
        }
        return { isValid: false };
    } catch (e) {
        console.log(e);
        return { isValid: false };
    }
};
