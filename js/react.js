// js/react.js
// list2-22(p37)0112

new Vue({
    el: '#app',
    data: {
        // 現在日時
        current: new Date()
    },
    // 起動時にタイマーを設定
    created: function() {
        let that = this;
        // 1000ミリ秒スパンでcurrentプロパティを更新
        this.timer = setInterval(function() {
            that.current = new Date();
        }, 1000);
    },
    // 終了前にタイマーを破棄
    beforeDestroy: function() {
        clearInterval(this.timer);
    }
});