

Vue.filter('truncate', function(value, len = 10, omit = '...') {
  if (typeof value !== 'string') {
    return value;
  }
  if (value.length <= len) {
    return value;
  } else {
    return value.substring(0, len) + omit;
  }
});

new Vue({
  el: '#app',
  data: {
    memo: ''
  }
});