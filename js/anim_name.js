

new Vue({
  el: '#app',
  data: {
    flag: true
  },
  methods: {
    onclick: function() {
      this.flag = !this.flag;
    }
  }
});