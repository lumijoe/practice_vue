// list3-96(p127)0129
// event_once.js

new Vue({
    el: '#app',
    data: {
        result: '_'
    },
    methods: {
        onclick: function(e) {
            this.result = Math.floor(Math.random() * 100) + 1; 
        }
    }
});

