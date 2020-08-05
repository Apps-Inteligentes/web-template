require('./bootstrap');
window.Vue = require('vue');


// AUTOMATICALL REGISTER ALL VUE COMPONENTS
const files = require.context('../components', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// MANUALLU REGISTER ONE COMPONENT
//Vue.component('example-component', require('./components/ExampleComponent.vue').default);


import Cleave from 'cleave.js';

Vue.directive('cleave', {
    inserted: (el, binding) => {
        el.cleave = new Cleave(el, binding.value || {})
    },
    update: (el) => {
        const event = new Event('input', {bubbles: true});
        setTimeout(function () {
            el.value = el.cleave.properties.result
            el.dispatchEvent(event)
        }, 100);
    }
})




const app = new Vue({
    el: '#app',
});
