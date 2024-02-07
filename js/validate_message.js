

Vue.use(VeeValidate, {
  locale: 'ja',
  fastExit: false,
  dictionary : {
    ja: {
      messages: {
        required: function(field, param) {
          return field + 'を入力してください';
        }
      },
      attributes: {
        name: '氏名',
        age: '年齢',
        sex: '性別'
      }
    }
  } 
});

new Vue({
  el: '#app'
});