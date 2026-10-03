# おもちもち日本語ノート

台湾人の学習者に2年間日本語を教えた日本語教師・おもちのサイトです。

## 記事の書き方

1. `記事のひな形.md` をコピーする
2. `src/content/articles/ja/` に入れる（ファイル名は英語。例: `te-form.md`。これが記事の住所になります）
3. 上の `---` の間（タイトル、シリーズ、レベルなど）を書きかえる
4. 下に本文を書く（Coworkで書いた文章をそのまま貼ってOK）
5. 書き終わったら `draft: true` を `draft: false` にすると公開されます

記事の最後の「noteの教材」の案内は、自動で付きます。

## よく変える設定

`src/config.ts` にまとめてあります。

- サイトの名前、説明文
- `noteUrl`：noteのURL
- `adsenseClient`：Googleアドセンスのid

## 後から足せるもの

- 中国語（繁体字）：記事は `src/content/articles/zh-tw/` に入れ、`lang: zh-tw` を付ける（ページは今後作成）
- 独自ドメイン：`astro.config.mjs` の `site` を変えて `base` を消す

## 手元で見る（クロードコード用）

```
npm install
npm run dev
```
