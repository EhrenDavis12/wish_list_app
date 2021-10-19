import {apiClient} from "./clients";
import {getHeaders} from "./clients/clientHelpers";


export default {
    get(app, id){
        return apiClient.get(`/api/v1/app_group/${id}/`, getHeaders(app));
    },
    list(app){
        return apiClient.get('/api/v1/app_group/', getHeaders(app));
    },
    create(app, data){
        return apiClient.post('/api/v1/app_group/', data, getHeaders(app));
    },
    edit(app, data){
        const sendData = {
            name:data.name,
            description:data.description,
            is_active:data.is_active
        }
        return apiClient.patch(`/api/v1/app_group/${data.id}/`, sendData, getHeaders(app));
    },
    delete(app, id){
        return apiClient.delete(`/api/v1/app_group/${id}/`, getHeaders(app));
    }
};