// ここを書きかえると、サイト全体に反映されます

export const SITE = {
  name: 'おもちもち日本語ノート',
  tagline: '台湾人の学習者に2年間教えた日本語教師の「教え方」ノート',
  description:
    '台湾人の学習者に2年間日本語を教えた経験から、N5〜N3文法の教え方と、学習者がつまずきやすいポイントを紹介します。新人の先生、海外で教える先生向けのサイトです。',
  author: 'おもち',
  lang: 'ja',
  // noteのURL（記事の最後の案内ボタンは、『月見荘の青い手紙』第1話へ）
  noteUrl: 'https://note.com/omochimochis_jp/n/n936b2b406180',
  noteProfileUrl: 'https://note.com/omochimochis_jp',
  // Googleアドセンスのパブリッシャーid（例: ca-pub-1234567890）。空なら広告は出ません
  adsenseClient: '',
};

// 中国語（繁体字）ページ用
export const SITE_ZH = {
  tagline: '給台灣學生的日文文法筆記',
  description:
    '日文老師整理的N5〜N3文法筆記。台灣學生常犯的錯誤、為什麼會錯（和中文比較）、記憶小技巧，還有練習題。',
};

export const LEVEL_ZH: Record<string, string> = {
  N5: '一個一個學動詞變化',
  N4: '新的變化＋相似文法比較',
  N3: '用意思分組學習',
};

export const SERIES = [
  { id: 'tsumazuki', name: '台湾人のつまずきポイント', short: 'つまずき', desc: '「の」の使いすぎ、自動詞・他動詞など、教室でよく見る間違い' },
  { id: 'oshiwake', name: '似ている文法の教え分け', short: '教え分け', desc: 'と・ば・たら・ならなど、学習者が迷う文法の区別' },
  { id: 'jugyo', name: '授業の作り方', short: '授業づくり', desc: '導入→活用ドリル→反復・代入ドリル→会話の流れ' },
  // 今はお休み中のシリーズ。使うときは下の2行の // を消す
  // { id: 'bunka', name: '文化体験授業', short: '文化体験', desc: 'ひな祭り、花札、浴衣などを使った授業' },
  // { id: 'kaigai', name: '海外で教えるリアル', short: '海外のリアル', desc: '海外の教室で働くということ' },
] as const;

export const LEVELS = ['N5', 'N4', 'N3'] as const;

export type SeriesId = (typeof SERIES)[number]['id'];

export function seriesName(id: string) {
  return SERIES.find((s) => s.id === id)?.name ?? id;
}

// base（/nihongo/）付きのリンクを作る
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const p = path.replace(/^\//, '');
  return `${base}/${p}`;
}

// 言語に合わせたリンク（ja: /nihongo/xxx, zh-tw: /nihongo/zh-tw/xxx）
export function langUrl(lang: string, path = '') {
  return lang === 'zh-tw' ? url(`zh-tw/${path.replace(/^\//, '')}`) : url(path);
}
