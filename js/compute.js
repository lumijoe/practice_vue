// js/compute.js
// list2-14(p29)0110

new Vue({
    el: '#app',
    data: {
        email: 'Y-Suzuki@example.com'
    },
    // 算出した結果を取得する算出プロパティ
    computed: {
        localEmail: function() {
            return this.email.splite('@')[0].toLowerCase();
        }
    }
});