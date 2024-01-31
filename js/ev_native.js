// list4-16(p163)0131
// ev_native.js

// インプット要素を出力するだけのコンポーネント
Vue.component('my-input', {
    // template: `<label>名前：<input type="text" /></label>`
    template: `<input type="text" />`
});

new Vue({
    el: '#app',
    methods: {
        // フォーカス時にイベント情報をログ表示
        onfocus: function(e) {
            console.log(e);
        }
    }   
});