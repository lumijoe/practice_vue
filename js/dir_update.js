

Vue.directive('highlight', {
  bind: function(el, binding, vnode, oldVnode) {
   el.style.backgroundColor = binding.value;
 },
 update: function(el, binding, vnode, oldVnode) {
   el.style.backgroundColor = binding.value;
 }
});
