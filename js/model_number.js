// list3-34(p79)0123
// model_number.js

new Vue({
    el: '#app',
    data: {
        temperature: 0
    },
    methods: {
        onchange: function() {
            console.log(this.temperature.toFixed(1));         
        }
    }
});

