// js/react_async.js
// list2-25(p42)0112

new Vue({
    el: '#app',
    data: {
        author: {
            name: '山田'
        }
    },
    created: function() {
        Vue.set(this.author, 'company', 'WINGSプロジェクト');
        // <div id="app">配下にcompanyプロパティの内容が含まれているか
        console.log(this.$el.textContent.includes(this.author.company));
        }
});