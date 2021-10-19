export const getAccessToken= app => {
    return app.$store.state.auth.accessToken;
};

export const getHeaders = app => {
    return {headers: { Authorization: `Bearer ${getAccessToken(app)}` }};
};