// list3-94(p126)0129
// event_submit.js

new Vue({
    el: '#app',
    methods: {
        // サブミット時に確認ダイアログを表示
        onsubmit: function(e) {
            if (!confirm('送信しても良いですか？')) {
                e.preventDefault();
                return;
            }
        }
    }
});

