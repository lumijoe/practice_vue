// list4-11(p155)0130
// prop_basic.js(修正版)

Vue.component('my-hello', {
    // プロパティを定義
    props: {
        yourName: {
            type: String,
            required: true
        }
    } 
});

new Vue({
    el: '#app'
});