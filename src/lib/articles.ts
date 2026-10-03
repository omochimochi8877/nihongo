import { getCollection } from 'astro:content';

// 下書きは、手元で確認するとき（npm run dev）だけ表示する
const showDrafts = import.meta.env.DEV || process.env.SHOW_DRAFTS === 'true';

export async function getArticles(lang: 'ja' | 'zh-tw' = 'ja') {
  const all = await getCollection('articles', ({ data }) => data.lang === lang && (showDrafts || !data.draft));
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

// ファイル名 ja/te-form.md → te-form
export function slugOf(id: string) {
  return id.split('/').pop()!;
}
