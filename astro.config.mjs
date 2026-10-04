// サイト全体の設定ファイル
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

// サイトマップに各記事の更新日を入れる（記事の date / updated から）
const lastmod = {};
for (const lang of ['ja', 'zh-tw']) {
  const dir = `./src/content/articles/${lang}`;
  for (const f of readdirSync(dir).filter((f) => f.endsWith('.md'))) {
    const fm = readFileSync(`${dir}/${f}`, 'utf8').split('---')[1] ?? '';
    const d = (fm.match(/^updated:\s*(\S+)/m) ?? fm.match(/^date:\s*(\S+)/m))?.[1];
    if (d) lastmod[`${lang === 'ja' ? '' : 'zh-tw/'}articles/${f.replace(/\.md$/, '')}/`] = new Date(d).toISOString();
  }
}

export default defineConfig({
  // 公開する住所。独自ドメインに変えるときは site を変えて base を消す
  site: 'https://omochimochi8877.github.io',
  base: '/nihongo',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404/'),
      serialize(item) {
        const key = Object.keys(lastmod).sort((a, b) => b.length - a.length).find((k) => item.url.endsWith('/' + k));
        if (key) item.lastmod = lastmod[key];
        return item;
      },
    }),
  ],
  // 中国語（繁体字）ページを後で足すための準備
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'zh-tw'],
    routing: { prefixDefaultLocale: false },
  },
});
