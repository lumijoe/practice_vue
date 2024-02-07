

let dataLoggable = {
  mounted: function() {
    console.log(this.$data);
  }
};

Vue.component('my-comp', {
  data: function() {
    return {
      current: new Date()
    }
  },
  template: `<div>現在時刻：{{ current }}</div>`,
  mixins: [ dataLoggable ]
});

new Vue({
  el: '#app'
});