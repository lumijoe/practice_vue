

Vue.directive('highlight', function(el, binding, vnode, oldVnode) {
  if (binding.value === binding.oldValue) { return; }
  console.log(binding.value);
  el.style.backgroundColor = binding.value;
});

new Vue({
  el: '#app',
  data: {
    name: '名無しの権兵衛',
    color: 'yellow'
  },
});