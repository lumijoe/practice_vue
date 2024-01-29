// list3-102(p137)0129
// event_sys.js

new Vue({
    el: '#app',
    data: {
        name: '匿名'
    },
    // methods: {
    //     help: function() {
    //         window.alert('氏名（漢字）を入力してください');
    //     }
    // }
    methods: {
        checkKey: function(event) {
            if (event.key === 'q' && event.altKey) {
                this.help();
            }
        },
        help: function() {
            window.alert('氏名（漢字）を入力してください');
        }
    }
});

