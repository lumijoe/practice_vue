// list3-32(p76)0123
// model_file.js

new Vue({
    el: '#app',
    data: {
        message: ''
    },
    methods: {
        onchange: function() {

            // アップロードファイルを準備
            let that = this;
            let fl = this.$refs.upfile.files[0];
            let data = new FormData();
            data.append('upfile', fl, fl.name);


            // サーバーにデータを送信
            fetch('./upload.php', {
                method: 'POST',
                body: data,
            })
           
           
            // 成功時には結果を表示
            .then(function (response) {
                return response.text();
            })
            .then(function (text) {
                that.message = text;
            })
            
            
            // 失敗時にはエラーメッセージをダイアログ表示
            .catch(function (error) {
                window.alert('Error: ' + error.message);
            });
        }
    }
});

