import {apiClient} from "./clients";
import {getHeaders} from "./clients/clientHelpers";


export default {
    get(app, id){
        return apiClient.get(`/api/v1/wish_list/${id}/`, getHeaders(app));
    },
    list(app){
        return apiClient.get('/api/v1/wish_list/', getHeaders(app));
    },
    create(app, data){
        return apiClient.post('/api/v1/wish_list/', data, getHeaders(app));
    },
    edit(app, data){
        const sendData = {
            name:data.name,
            public_note:data.public_note,
            private_note:data.private_note
        }
        return apiClient.patch(`/api/v1/wish_list/${data.id}/`, sendData, getHeaders(app));
    },
    delete(app, id){
        return apiClient.delete(`/api/v1/wish_list/${id}/`, getHeaders(app));
    }
};