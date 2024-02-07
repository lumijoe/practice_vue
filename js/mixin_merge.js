

Vue.config.optionMergeStrategies.tags = function (toVal, fromVal) {
  if (!toVal) { toVal = []; }
  if (!fromVal) { fromVal = []; }
  return fromVal.concat(toVal);
};

let tagin = {
  tags: [ 'tag', 'strategy' ]
};

Vue.component('my-comp', {
  tags: [ 'component', 'sample' ],
  template: `<div>{{$options.tags}}</div>`,
  mixins: [ tagin ],
});

new Vue({
  el: '#app'
});