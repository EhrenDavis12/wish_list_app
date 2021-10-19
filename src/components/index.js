import Vue from "vue";
import appGroups from "./appGroups";
import core from "./core";

const components = {
    ...appGroups,
    ...core
}

Object.keys(components).forEach(component => {
    Vue.component(component, components[component]);
})