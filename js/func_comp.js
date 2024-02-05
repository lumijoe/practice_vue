

Vue.component('my-random', {
  functional: true,
  props: [ 'min', 'max' ],
  render: function(h, context) {
    let min = context.props.min;
    let max = context.props.max;
    let result = Math.floor(Math.random() * (max - min + 1) + min);
    return h('p', result);
  }
});

new Vue({
  el: '#app'
});