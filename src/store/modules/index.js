import auth from "./auth";

const modules = {
    auth:{
      namespaced: true,
      ...auth
    }
};

export default modules;