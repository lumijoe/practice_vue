

Vue.filter('abs', function(value) {
  return Math.abs(value);
});
Vue.filter('number', function(value, dec = 0) {
  return value.toFixed(dec);
});

new Vue({
  el: '#app',
  data: {
    value: -150.3486
  }
});