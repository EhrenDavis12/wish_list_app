// import router from "../../../router";
// import { getAPI } from './axios-api'
// import { apiClient } from "../../../api/clients";

export default {
    // async loginAction({commit}, {email, password}) {
    //     const response = await this._vm.api.auth.login(email, password);
    //     debugger;
    //     commit("setAuth", response.data);
    //     window.localStorage.setItem("isLoggedIn", true);
    //     window.localStorage.setItem("permissions", response.data.decodedJwt.scope);
    //     router.push("/");
    // },
    // async logoutAction({commit}) {
    //     router.push("/login");
    //     commit("unsetAuth");
    //     window.localStorage.removeItem("isLoggedIn");
    //     window.localStorage.removeItem("permissions");
    //     await this._vm.api.auth.logout();
    // }
    userLogout (context) {
      if (context.getters.loggedIn) {
          context.commit('destroyToken')
          // window.localStorage.removeItem("accessToken");
          // window.localStorage.removeItem("refreshToken");
      }
    },
    userLogin (context, usercredentials) {
      return new Promise((resolve, reject) => {
          this._vm.api.auth.login(
              usercredentials.username,
              usercredentials.password
          )
          .then(response => {
            context.commit('updateStorage', { access: response.data.access, refresh: response.data.refresh })
            // window.localStorage.setItem("accessToken", response.data.access);
            // window.localStorage.setItem("refreshToken", response.data.refresh);
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    }
};
