// js/method.js
// list2-16(p30)0110

new Vue({
    el: '#app',
    data: {
        email: 'Y-Suzuki@example.com'
    },
    // 算出した結果を取得する算出プロパティ
    methods: {
        localEmail: function() {
            return this.email.split('@')[0].toLowerCase();
        }
    }
});