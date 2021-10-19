import {apiClient} from "./clients";

export default {
  login(username, password){
    return apiClient.post("/api/v1/user/login/", {
      username: username, password
    });
  },
  logout(){
    return apiClient.post("api/auth/logout", {});
  }
};