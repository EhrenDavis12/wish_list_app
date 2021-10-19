export default {
    // setAuth: (state, authData) => {
    //     const {decodedJwt} = authData;
    //     state.isLoggedIn = true;
    //     state.permissions = decodedJwt.scope;
    // },
    // unSetAuth: state => {
    //     state.isLoggedIn = false;
    //     state.permissions = [];
    // },
    updateStorage (state, { access, refresh }) {
        // const {decodedJwt} = authData;
        // state.isLoggedIn = true;
        // state.permissions = decodedJwt.scope;
        state.accessToken = access
        state.refreshToken = refresh
    },
    destroyToken (state) {
        state.accessToken = null
        state.refreshToken = null
        // state.isLoggedIn = false;
        // state.permissions = [];
    }
}