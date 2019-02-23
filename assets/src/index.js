import Vue from "vue";

import * as BootstrapUmi from "bootstrap-umi";
import "bootstrap-umi/dist/css/bootstrap.css";

import Header from "../components/Header.vue";
import QR from "../components/QR.vue";

Vue.use(BootstrapUmi);

const app = new Vue({
    el: "#app",
    components: {
        'nav-bar': Header,
        'qr-load': QR
    }
})