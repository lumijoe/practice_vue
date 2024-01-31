// list4-14(p161)0131
// emit_basic.js

Vue.component('my-counter', {
    // ボタンクリックで加算する値
    props: [ 'step' ],
    // クリック時にカウントアップ処理を実行
    template: `<button type="button" v-on:click="onclick">
        {{ step }}</button>`,
    methods: {
        // クリック時にイベントを発生
        onclick:function() {
            this.$emit('plus', Number(this.$props.step));
        }
    }
});

new Vue({
    el: '#app',
    data: {
        // カウンター値
        current: 0
    },
    methods: {
        // plusイベントでカウンター値を更新
        onplus: function(e) {
            // `this`を使用して`current`を更新する
            this.current += e;
        }
    }
});