// list4-12(p159)0130
// emit_basic.js(修正版)

Vue.component('my-counter', {
    // ボタンクリックで加算する値
    props: [ step ],
    // クリック時にカウントアップ処理を実行
    template: `<button type="button" v-on:click="onclick">
        {{ step }}</button>`,
    methods: {
        // クリック時にイベントを発生
        onclick:function() {
            this.$emit('plus', Number(this.step));
        }
    }
});

new Vue({
    el: '#app'
});