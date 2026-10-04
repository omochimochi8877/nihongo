// サイト全体の設定ファイル
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 公開する住所
  site: 'https://omochimochis.online',
  trailingSlash: 'always',
  integrations: [sitemap()],
  // 中国語（繁体字）ページを後で足すための準備
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'zh-tw'],
    routing: { prefixDefaultLocale: false },
  },
});
