// list3-8(p60)0122
// event_error.js

new Vue({
    el: '#app',
    methods: {
        // .htmlファイルから渡されたメッセージをログ出力
        onclick: function(message) {
            console.log(message);
        }
    }
});
 