// list3-6(p58)0122
// event_mouse2.js

new Vue({
    el: '#app',
    data: {
        result: ''
    },
    methods: {
        // mouseenter / mouseleaveイベントの情報をresultに反映
        onmousein: function(e) {
            this.result += 'Enter:' + e.target.id + '<br />';
        },
        onmouseout: function(e) {
            this.result += 'Leave:' + e.target.id + '<br />';
        }
    }
});
 