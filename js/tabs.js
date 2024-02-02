// list5-4(p181)0202
// tabs.js

Vue.component('tab-member', {
    template: `<div class="tab">
      <p>あなたもWINGSプロジェクトに参加しませんか？<br />
        現在、WINGSプロジェクトでは、ご一緒にお仕事ができる仲間を募集中です。</p>
      <label>名前：<input type="text" v-model="name" /></label>
      <input type="submit" value="登録" />
    </div>`,
    data: function() {
      return {
        name: ''
      }
    }
  });
  
  Vue.component('tab-new', {
    template: `<div class="tab">
      <h3>「HTML5超入門 」発売！</h3>
      <p>ステップバイステップで学ぶ入門書です。<br />
        HTML5アプリの基礎知識、画面のデザイン、コードの書き方などが理解できます。</p>
    </div>`
  });
  
  Vue.component('tab-env', {
    template: `<div class="tab">
      <p>開発環境の設定方法を図を交えて詳しく解説します。<br />
        紹介している各モジュールは、日々頻繁にバージョンアップが行われています。</p>
    </div>`
  });
  
  new Vue({
    el: '#app',
    methods: {
      onclick: function(tab) {
        this.current = tab;
      }
    },
    computed: {
      tabNames: function() {
        return Object.keys(this.tabs);
      },
      currentTab: function() {
        return 'tab-' + this.current;
      }
    },
    data: {
      current: 'member',
      tabs: {
        'member': 'メンバー募集',
        'new': '新刊紹介',
        'env': '環境構築設定'
      }
    }
  });