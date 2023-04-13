import {api} from './baseUrl';

export const getHotels = async () => {
    const res = await api.get(`/api/hotels`);
    return res;
}