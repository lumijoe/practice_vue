// list3-36(p81)0123
// model_trim.js

new Vue({
    el: '#app',
    data: {
        titleMemo: 'メモ',
        memo: ''
    },
    methods: {
        // 入力値をログに出力
        onchange: function() {
            console.log('入力値は「' + this.memo + '」です。');         
        } 
    }
});

