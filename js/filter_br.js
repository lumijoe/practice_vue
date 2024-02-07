

Vue.filter('nl2br', function(value) {
  if (typeof value !== 'string') {
    return value;
  }
  return value.replace(/\r?\n/g, '<br />');
});

new Vue({
  el: '#app',
  data: {
    memo: ''
  }
});