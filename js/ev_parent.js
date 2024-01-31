// list4-18(p164)0131
// ev_parent.js

// my-childコンポーネントを定義
Vue.component('my-child', {
    data: function() {
        return {
            message: ''
        }
    },
    template: `<p>子：{{ message }}</p>`,
    // マウント時に親のmessageを定義
    mounted: function() {
        this.$parent.message = '子から設定';
    }
});

new Vue({
    el: '#app',
    data: {
        message: ''
    },
    // マウント時に子のmessageを設定
    mounted: function() {
        this.$refs.child.message = '親から設定';
    }
});