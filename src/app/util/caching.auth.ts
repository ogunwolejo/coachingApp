import { LocalStorageData } from '../../interface/interface'


export const cacheAuthHandler = (data: LocalStorageData) => {
    localStorage.setItem('authUser', JSON.stringify(data));
}