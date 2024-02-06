

Vue.directive('markdown', function (el, binding, vnode, oldVnode) {
  el.innerHTML = marked(el.textContent, binding.value);
});

new Vue({
  el: '#app',
  data: {
      options: {
          gfm: true,
          breaks: true,
          xhtml: true,
      }
  },
});