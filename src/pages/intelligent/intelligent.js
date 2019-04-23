import Vue from 'vue';
import 'normalize.css';
import App from './intelligent.vue';
import 'assets/responsive';
import 'assets/global.scss';

Vue.config.productionTip = false;

new Vue({
	render: h => h(App)
}).$mount('#app');