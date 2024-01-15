// list3-2(p53)0115
// js/event.js

new Vue({
    el: '#app',
    data: {
        message: '' 
    },
    methods: {
        // クリック時に現在日時を取得
        onclick: function() {
            // this.message = "HI!";
            this.message = new Date().toLocaleString();
            // console.log("Hi");
        }
    }
});
