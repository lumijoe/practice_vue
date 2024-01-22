// list3-4
// event_mouse.js

new Vue({
    el: '#app',
    data: {
        path: 'http://www.web-deli.com/image/linkbanner_l.gif' 
    },
    methods: {
        // 画像にマウスポインターが乗った時
        onmouseenter: function() {
            this.path = 'http://www.web-deli.com/image/home_chara.gif';
        },
        // 画像からマウスポインターが外れた時
        onmouseleave: function() {
            this.path = 'http://www.web-deli.com/image/linkbanner_l.gif';
        }
    }
});
