

Vue.mixin({
  created: function() {
    let { title, keyword, description } = this.$data;
    if (title) { document.title = title; }
    if (keyword) {
      document.querySelector("meta[name='keyword']").
        setAttribute('content', keyword);
    }
    if (description) {
      document.querySelector("meta[name='description']").
        setAttribute('content', description);
    }
  }
});

Vue.component('my-mix', {
  template: `<div>Global Mix-In!!</div>`,
  data: function() {
    return {
      title: 'グローバルミックスイン',
      keyword: 'mixin, vuejs, component',
      description: 'アプリ全体に適用されるミックスインの例です。'
    };
  }
});

new Vue({
  el: '#app'
});