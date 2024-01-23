// list3-30(p75)0123
// model_obj.js

new Vue({
    el: '#app',
    data: {
        unit: {}
    },
    methods: {
        // 選択されたオプションの値をログに出力
        onchange: function() {
            const sizeAsNumber = parseInt(this.unit.size);
            console.log(this.unit.name + ':' + sizeAsNumber.toLocaleString());
        }
    }
});
