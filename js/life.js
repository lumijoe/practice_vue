// js/life.js

let app = new Vue({
    el: '#app',
    beforeCreate: function() {
        console.log('beforeCreate...');
    },
    created: function() {
        console.log('created...');
    },
    beforeMount: function() {
        console.log('beforeMount...');
    },
    mounted: function() {
        console.log('mounted...');
    },
    beforeUpdate: function() {
        console.log('beforeUpdate...');
    },
    updated: function() {
        console.log('updated...');
    },
    beforeDestroy: function() {
        console.log('beforeDestroy...');
    },
    destroyed: function() {
        console.log('destroyed...');
    },
});

// 300ミリ秒のあとに破棄
setTimeout(function() {
    app.$destroy();
}, 3000);