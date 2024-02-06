

Vue.directive('highlight', function(el, binding, vnode, oldVnode) {
  el.style.backgroundColor = binding.value;
});
