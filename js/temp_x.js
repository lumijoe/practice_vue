

Vue.component('my-hello', {
  template: '#my-hello',
  data: function() {
    return {
      name: 'Vue.js'
    };
  }
})

new Vue({
  el: '#app'
});