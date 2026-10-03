// ここを書きかえると、サイト全体に反映されます

export const SITE = {
  name: 'おもちもち日本語ノート',
  tagline: '台湾人の学習者に2年間教えた日本語教師の「教え方」ノート',
  description:
    '台湾人の学習者に2年間日本語を教えた経験から、N5〜N3文法の教え方と、学習者がつまずきやすいポイントを紹介します。新人の先生、海外で教える先生向けのサイトです。',
  author: 'おもち',
  lang: 'ja',
  // noteのURL（空のときは「準備中」と表示）
  noteUrl: 'https://note.com/omochimochis_jp',
  // Googleアドセンスのパブリッシャーid（例: ca-pub-1234567890）。空なら広告は出ません
  adsenseClient: '',
};

export const SERIES = [
  { id: 'tsumazuki', name: '台湾人のつまずきポイント', short: 'つまずき', desc: '「の」の使いすぎ、自動詞・他動詞など、教室でよく見る間違い' },
  { id: 'oshiwake', name: '似ている文法の教え分け', short: '教え分け', desc: 'と・ば・たら・ならなど、学習者が迷う文法の区別' },
  { id: 'jugyo', name: '授業の作り方', short: '授業づくり', desc: '導入→活用ドリル→反復・代入ドリル→会話の流れ' },
  { id: 'bunka', name: '文化体験授業', short: '文化体験', desc: 'ひな祭り、花札、浴衣などを使った授業' },
  { id: 'kaigai', name: '海外で教えるリアル', short: '海外のリアル', desc: '海外の教室で働くということ' },
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
