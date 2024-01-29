// list3-100(p134)0129
// event_key.js

new Vue({
    el: '#app',
    data: {
        name: '匿名'
    },
    methods: {
        // エスケープキーでテキストをクリア
        clear: function() {
            this.name = '';
        }
    }
});

