import Vue from "vue";
import helloWorld from "./helloWorld";

const components = {
    ...helloWorld
}

Object.keys(components).forEach(component => {
    Vue.component(component, components[component]);
})