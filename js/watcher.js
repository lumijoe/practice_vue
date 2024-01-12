// js/watcher.js
// list2-27(p45)0112

let app = new Vue({
    el: '#app',
    data: {
        name: '',      // 入力値
        upperName: ''  // 表示する値（大文字変換後の文字列）
    },
    created: function() {
    //遅延処理用のdelayFuncメソッドを準備
    this.delayFunc = _.debounce(this.getUpper, 2000); 
    },
    // nameプロパティが変化した時にdelayFuncメソッドを呼び出し
    watch: {
        name: function(newValue, oldValue) {
            this.delayFunc();
        }
    },
    // nameの値を大文字に変換したものをupperNameプロパティに設定
    methods: {
        getUpper: function() {
            this.upperName = this.name.toUpperCase();
        }
    }
});