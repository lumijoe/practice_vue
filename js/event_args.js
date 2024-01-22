// list3-14(p65)0122
// event_args.js

new Vue({
    el: '#app',
    methods: {
        // .htmlファイルから渡されたメッセージをログ出力
        onclick: function(message) {
            console.log(message);
        }
    }
});
 