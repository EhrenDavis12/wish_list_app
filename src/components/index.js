import Vue from "vue";
import appGroups from "./appGroups";
import wishLists from "./wishLists";
import core from "./core";

const components = {
    ...appGroups,
    ...core,
    ...wishLists
}

Object.keys(components).forEach(component => {
    Vue.component(component, components[component]);
})