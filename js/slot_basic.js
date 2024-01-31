// list4-18(p164)0131
// ev_parent.js

Vue.component('my-hello', {
   props: [ 'yourName' ],
   template: `<div>こんにちは、<slot>ゲスト</slot>さん！</div>`
});

new Vue({
    el: '#app'
});