

Vue.directive('highlight', {
  bind: function(el, binding) {
    el.addEventListener('mouseenter', function() {
      this.style.backgroundColor = binding.value;
    }, false);
    el.addEventListener('mouseleave', function() {
      this.style.backgroundColor = null;
    }, false);
  }
});

new Vue({
  el: '#app',
  data: {
    color: 'yellow'
  }
});