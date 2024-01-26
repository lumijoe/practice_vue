// list3-63(p103)0126
// 修正版：list3-64
// for_change.js

new Vue({
    
    el: '#app',
    data: {
        list: [  '赤パジャマ', '青パジャマ', '黄パジャマ' ]
    },
    methods: {
        // ボタンクリック時に2番目の要素を変更
        onclick: function() {
            // this.list[1] = '茶パジャマ';　では配列の場合は動作しない
            // Vue.set(this.list, 1, '茶パジャマ'); // または
            // this.list.splice(1, 1, '茶パジャマ');
            // this.list.reverse(); // 逆順
            this.list.shift(); // 先頭の要素を削除
        }
    }
});

