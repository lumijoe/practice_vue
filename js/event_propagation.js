// list3-98(p129)0129
// event_propagation.js

new Vue({
    el: '#app',
    methods: {
        onParentClick: function(e) {
            console.log('#parent run...');
        },
        onMyClick: function(e) {
            console.log('#my run...');
        },
        onChildClick: function(e) {
            console.log('#child run...');
        }
    }
});

