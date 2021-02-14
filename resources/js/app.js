require('./bootstrap');
window.Vue = require('vue');
import Cleave from 'cleave.js';
import App from '../components/App.vue'



const app = Vue.createApp(App) // Root component
const vm = app.mount('#app')



// AUTOMATICALLY REGISTER ALL VUE COMPONENTS
const files = require.context('../components', true, /\.vue$/i)
files.keys().map(key => app.component(key.split('/').pop().split('.')[0], files(key).default))

// MANUALLY REGISTER ONE COMPONENT
//app.component('example-component', require('./components/ExampleComponent.vue').default);



app.directive('cleave', {
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


