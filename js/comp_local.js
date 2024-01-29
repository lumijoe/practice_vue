// list4-4(p147)0129
// comp_local.js
// コンポーネント

// MyHelloコンポーネントの本体
let MyHello = {
    template: `<div>こんにちは、Vue.js!</div>`
};

new Vue({
    el: '#app',
    // コンポーネントをローカル登録
    components: {
        'my-hello': MyHello
    }
});


// new Vue({
//     el: '#app',
//     // コンポーネントをローカル登録
//     components: {
//         'my-hello': {
//             template: `<div>こんにちは、Vue.js!</div>`
//         }
//     }
// });