import axios from "axios";

const apiRootUrl = process.env.VUE_APP_API_ROOT_URL;

const apiClient = axios.create({
        baseURL:apiRootUrl,
        timeout: 1000
    });
// headers: {"x-camelcase": 1}
export default apiClient;