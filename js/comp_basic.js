// list4-1(p143)0129
// comp_basic.js
// コンポーネント

Vue.component('my-hello', {
    template: `<div>こんにちは、{{ name }}!</div>`,
    data: function() {
        return {
            name: 'Vue.js'
        };
    }
});

new Vue ({
    el: '#app'
});


