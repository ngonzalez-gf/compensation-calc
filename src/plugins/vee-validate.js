import Vue from 'vue'
import VeeValidate from 'vee-validate';
import { validationConfig } from '../Langs/validationConfig'

Vue.use(VeeValidate);
Vue.use(VeeValidate, validationConfig)

