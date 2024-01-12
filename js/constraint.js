// js/constraint.js
// list2-24(p39)0112

let app = new Vue({
    el: '#app',
    data: {
        author: {
            name: '山田'
        }
    },
    created: function() {
        let that = this;
        // 3000ミリ秒後にプロパティを追加
        this.timer = setTimeout(function() {
            that.author.name = 'Y.YAMADA';
            // that.author.company = 'WINGSプロジェクト';
        }, 3000);
    },
    beforeDestroy: function() {
        clearInterval(this.timer);
    }
});