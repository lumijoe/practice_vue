

Vue.filter('trim', function(value) {
  if (typeof value !== 'string') {
    return value;
  }
  return value.trim();
});

new Vue({
  el: '#app',
  data: {
    str: '  WINGS Project  '
  }
});