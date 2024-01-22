// list3-16(p66)0122
// event_args2.js

new Vue({
    el: '#app',
    methods: {
        onclick: function(message, e) {
            console.log(message);
            console.log(e);
        }
    }
});
 