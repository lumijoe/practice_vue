// list4-18(p164)0131
// ev_parent.js

Vue.component('my-book', {
   data: function() {
        return {
                book: {
                    isbn:'978-4-8222-5389-9',
                    title: '作って楽しむプログラミング HTML5超入門',
                    price: 2000,
                    publish: '日経BP'
                }
        };
   },
   template: 
    `
    <div>
        <!-- スロットにbookデータを渡す -->
        <slot :book="book"></slot>
    </div>
    `
});


new Vue({
    el: '#app'
});