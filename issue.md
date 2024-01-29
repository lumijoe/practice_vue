## Vue.js https://ja.vuejs.org/

- 起動はファイルを開き右クリック open with live viewer などで起動する方法

## Vue2.6.10 + Node .js16.20.2

- Vue3 では Node18 以上が必要
- 技術書に合わせて Vue2 で実装、その後 Vue3 をキャッチアップ予定

## JavaScript

- JavaScript フレームワーク
- アプリデータを自動的にページに反映
- ブラウザ上でデスクトップアプリライクなページ Ajax サービスとして Google マップが有名
- JavaScriptAPI
  - Geolocation API(ブラウザの地理的な座標の取得)
  - Web Storage(ブラウザにデータを保存するストレージ)
  - FileAPI(ローカルのファイルシステムを読み書き)
  - Canvas(JavaScript で画像を描画)
  - Web Workers(JavaScript のコードをバックグラウンドで実行)
  - WebSocket(サーバー、クライアント間での双方向通信)

## Vue:アプリの規模によって機能を追加していける

- コンポーネントで Static Site など
- Vue CLI(コマンドラインツール)、VueRouter(コンポーネントを使用して SPA を作成)、Vuex(データベース作成)
- Vue.js devtools(デバッグ簡易)
- VSCode ＋ Vetur(Vue.js 開発に対応したエディタ)

## コンポーネント構成、Vue.js のデータバインディング（データを埋め込んで描画させる）

- ビュー：テンプレート：HTML（レイアウトとデータを埋め込む場所を定義）
- ロジック：データオブジェクト：JavaScript（テンプレートから参照するデータを準備）
- スタイル：CSS
- ビューとロジックを Vue.js が統合し、動的にページを生成
- {{}}口髭、マスタッシュ、Mustache 構文：式の利用が可能、代入や条件分岐は指定不可
- 条件演算子は可能：{{ flag ? data: '0' }}
- v-〇〇属性(ディレクティブ)

## VSCode 拡張機能

- es6-string-html

## Vue.js 基本

- Vue クラス
- アプリで管理するデータの埋め込み{{...}}構文
- 属性操作、条件分岐やループ機能はディレクティブ(v-...)
- データの加工や操作は、算出プロパティやメソッド

## 開発用：　 CDN 利用　　https://ja.vuejs.org/guide/quick-start.html#using-vue-from-cdn

## 本番用：　ダウンロードバージョン: lib/vue.min.js として offline.html でインポートする

## Vue.js ３つの仕組み

**ディレクティブ**：v-〇〇属性：基礎的なマスタッシュ構文より、より複雑な機能の実現が可能

- 「ディレクティブ名:属性名="値"」属性と値は引数（v-bind:href="url"）
- ディレクティブ構文を html ファイルに記述、引数に関するデータを js ファイルに記述し、html 側で読み込ませる
- v-bind の省略形：<a :href="url">v-bind を省略で OK</a>

**算出プロパティ、メソッド**

- html のテンプレートで複雑な式を使用する時は、算出プロパティで書き換えて可読性やメンテナンス性を高めることが望ましい
- キャッシュされる

  **ライフサイクルフック**

## トリガー、イベント関連のディレクティブ

- ユーザー操作（トリガー）、プログラムが実行されるきっかけの出来事（イベント）、実行されるコード（イベントハンドラー）

- 主なイベント
  **フォーム(v-on:~)**

  - **focus** 要素にフォーカスが入った時
  - **blue** 要素からフォーカスが外れた時
  - **change** 要素の値を変更した時（input、select、textarea など）
  - **select** テキストボックス/テキストエリアのテキストを選択した時
  - **submit** フォームから送信した時

  **マウス(v-on:~)**

  - **click** 要素をクリックした時
  - **dblclick** 要素をダブルクリックした時
  - **mousedown** マウスのボタンを押した時
  - **mouseover** 要素のマウスポインターが乗った時：1
  - **mouseenter** 要素にマウスポインターが乗った時：2
  - **mouseleave** 要素からマウスポインターが外れた時：1
  - **mouseout** 要素からマウスポインターが外れた時：2
  - **mouseup** 要素の中をマウスポインターが移動した時
  - **mouseup** マウスのボタンを話した時

  **キー(v-on:~)**

  - **keydown** キーを押した時
  - **keyup** キーを離した時
  - **keypress** キーを押し続けている時

  **v-for + key はセットで使用してオーバーヘッドを防ぐ**

## Vscode, Chrome 　 Devtools 拡張機能導入

- Vue Devtools
- Vetur, Volar どちらかで検討中
- Vuetify

## 複数 style を配列形式で当てるものと、冗長的スタイルを prefix してくれるもの

- style_multi.html と js/style_multi.js
- style_prefix.html と js/style_prefix.js
- v-bind:style はあくまで応急処置的な適用法、本格的には v-bind:class を使用することが推奨される
  　 v-bind は省略できるので:class でも可能

## {{}}の構文が一瞬表示されてしまう問題は cloak で解決

- cloak.html, js/cloak.js, cloak.css を参考
