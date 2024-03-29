import axiosClient from './axiosClient';

const categoryApi = { 
    getAll(params) {
        const url = '/summary';
        return axiosClient.get(url, { params });
    },

    get(id) {
        const url = `/summary/${id}`;
        return axiosClient.get(url);
    },

    add(data) {
        const url = '/summary';
        return axiosClient.post(url, data);
    },

    update(data) {
        const url = `/summary/${data.id}`;
        return axiosClient.patch(url, data);
    },

    remove(id) {
        const url = `/summary/${id}`;
        return axiosClient.delete(url);
    }

}

export default categoryApi;