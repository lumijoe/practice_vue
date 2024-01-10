// js/method_diff.js
// list2-18(p32)0110

new Vue({
    el: '#app',
    data: {
        current: new Date().toLocaleString()
    },
    // 算出プロパティ経由で乱数を取得
    computed: {
        randomc: function() {
            return Math.random();
        }
    },
    // クリック時に処理を実行
    // メソッド経由で乱数を取得
    methods: {
        onclick: function() {
            this.current = new Date().toLocaleString();
        },
        randomm: function() {
            return Math.random();
        }
    }
});