// list3-58(p98)0126
// for_filter.js

new Vue({
    el: '#app',
    data: {
        books: [
            {
                image: 'images/noimage.jpg',
                isbn: '978-4-7981-5757-3',
                title: 'JavaScript逆引きレシピ',
                price: 2800
            },
            {
                image: 'images/wings.jpg',
                isbn: '978-4-8399-6644-7',
                title: '楽しいラズパイ電子工作ブック',
                price: 1900
            },
            {
                image: 'images/noimage.jpg',
                isbn: '978-4-7741-9763-0',
                title: '3ステップでしっかり学ぶ Python入門',
                price: 2480
            },
            {
                image: 'images/wings.jpg',
                isbn: '978-4-7981-5382-7',
                title: '独習C# 新版',
                price: 3600
            }
        ]
    },

    // 2500円以上の書籍情報を取得する算出プロパティ
    computed: {
        expensiveBooks: function() {
            return this.books.filter(function(b) {
                return b.price >= 2500;
            })
        }
    }
});

