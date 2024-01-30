// list4-8(p152)0130
// prop_inner.js

Vue.component('my-counter', {
    props: ['init'],
    template: 
        `<div>現在値は{{ current }}です！
            <input type="button"
                v-on:click="onclick"
                value="増やす" />
        </div>`,
    // データオブジェクトを定義
    // current: this.initだけでは動かない
    data: function() {
        return {
            current: parseInt(this.init) // initプロパティで渡された値を整数に変換してcurrentに設定
        };
    },
    methods: {
        // クリック時にcurrentプロパティをインクリメント
        onclick: function() {
            this.current++;
        }
    }
});

new Vue({
    el: '#app'
});