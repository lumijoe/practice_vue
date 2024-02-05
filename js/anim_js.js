

new Vue({
  el: '#app',
  data: {
    flag: true
  },
  methods: {
    onclick: function() {
      this.flag = !this.flag;
    },
    onenter: function(el, done) {
       Velocity(el, { opacity: 1}, { duration: 2000, complete: done });
    },
    onleave: function(el, done) {
      Velocity(el, { opacity: 0 }, { duration: 2000, complete: done });
    }
  }
});