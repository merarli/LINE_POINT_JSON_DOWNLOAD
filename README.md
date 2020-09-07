# はじめに
LINEポイントの獲得、使用履歴をJSONでダウンロードすることができるGoogle Chrome拡張機能です。

# 使い方

## インストール
このプロジェクトをクローンしてから``src``ディレクトリを
Google Chromeの拡張機能 > 「パッケージ化されていない拡張機能を読み込む」からインストールしてください。

## LINEポイントにアクセス
``https://points.line.me/point_history?.ref=header#/point_history/deposit``
にアクセスして、Google Chromeのデベロッパーツールで、デバイスを対応しているiOS端末名を指定してください。

## JSONダウンロード
保存する範囲を広げるために、ページを下へし続けてください。レンダリングされた範囲が保存されます。
JSONダウンロードを実行するためには、そのページでキーボードの``e``キーを押してください。

# License

MIT

# 引用
https://github.com/waterada/chrome-ex-template
