export default {
    // isLoggedIn: state => state.isLoggedIn,
    // permissions: state => state.permissions
    loggedIn (state) {
      return state.accessToken != null;
    },
    // accessToken (state) {
    //   return state.accessToken;
    // }
}