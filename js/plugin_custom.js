

let MyUtil = {
  install : function(Vue, options) {
    Vue.filter('trim', function(value) {
      if (typeof value !== 'string') {
        return value;
      }
      return value.trim();
    });
  }
};

Vue.use(MyUtil);

new Vue({
  el: '#app',
  data: {
    str: '  WINGS Project  '
  }
});