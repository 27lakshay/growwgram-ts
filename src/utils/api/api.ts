import axios from "axios";
import { getLocalData, setLocalData } from "../cache/cache";

const instance = axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_ID}`,
    },
});

export async function fetchRandomPhotos(offset = 1) {
    try {
        let localCache = getLocalData("feed_posts");
        if (localCache && offset <= localCache.page) {
            return localCache.data;
        }
        const response = await instance.get(`/photos?page=${offset}&per_page=10`);
        if (offset < 3 && response.data.length > 0) {
            let dataToStore = {
                data: localCache ? [...localCache.data, ...response.data] : response.data,
                timestamp: Date.now(),
                page: offset,
            };
            setLocalData("feed_posts", dataToStore);
        }
        return response.data;
    } catch (e) {
        console.log(e);
        return [];
    }
}
export async function fetchUserDetails(username: string) {
    try {
        let localCache = getLocalData("cachedUserProfiles");
        // debugger;
        if (localCache) {
            let user = localCache.data.find((userData: any) => userData.username === username);
            if (user) return user;
        }
        const response = await instance.get(`/users/${username}`);
        // debugger;
        let cachedUsers = (localCache && localCache.data) || [];

        if (cachedUsers.length >= 5) {
            cachedUsers.pop();
        }
        cachedUsers.unshift({ ...response.data, timestamp: Date.now() });
        let dataToStore = {
            data: cachedUsers,
            timestamp: Date.now(),
        };
        setLocalData("cachedUserProfiles", dataToStore);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}

export async function fetchUserPhotos(username: string, offset: number = 1) {
    try {
        let localCache = getLocalData(`${username}_posts`);
        if (localCache && offset <= localCache.page) {
            return localCache.data;
        }
        const response = await instance.get(`/users/${username}/photos?page=${offset}&per_page=20`);
        if (offset < 3 && response.data.length > 0) {
            let dataToStore = {
                data: localCache ? [...localCache.data, ...response.data] : response.data,
                timestamp: Date.now(),
                page: offset,
            };
            setLocalData(`${username}_posts`, dataToStore);
        }
        return response.data;
    } catch (e) {
        console.log(e);
        return [];
    }
}
