export interface IChar {
  id: string,
  h: string,
  "hLooksLike"?: string[],
  k: string,
  "kLooksLike"?: string[],
}

// https://en.wikipedia.org/wiki/Hiragana_(Unicode_block)
// https://en.wikipedia.org/wiki/Katakana_(Unicode_block)
const chars: IChar[] = [
    {
      "id": "A",
      "h": "あ",
      "k": "ア"
    },
    {
      "id": "I",
      "h": "い",
      "k": "イ"
    },
    {
      "id": "U",
      "h": "う",
      "k": "ウ"
    },
    {
      "id": "E",
      "h": "え",
      "k": "エ"
    },
    {
      "id": "O",
      "h": "お",
      "k": "オ"
    },
    {
      "id": "KA",
      "h": "か",
      "k": "カ"
    },
    {
      "id": "GA",
      "h": "が",
      "k": "ガ"
    },
    {
      "id": "KI",
      "h": "き",
      "k": "キ",
      "hLooksLike": ["sa"]
    },
    {
      "id": "GI",
      "h": "ぎ",
      "k": "ギ"
    },
    {
      "id": "KU",
      "h": "く",
      "k": "ク"
    },
    {
      "id": "GU",
      "h": "ぐ",
      "k": "グ"
    },
    {
      "id": "KE",
      "h": "け",
      "k": "ケ",
      "hLooksLike": ["ha"]
    },
    {
      "id": "GE",
      "h": "げ",
      "k": "ゲ"
    },
    {
      "id": "KO",
      "h": "こ",
      "k": "コ"
    },
    {
      "id": "GO",
      "h": "ご",
      "k": "ゴ"
    },
    {
      "id": "SA",
      "h": "さ",
      "k": "サ",
      "hLooksLike": ["ki"],
      "kLooksLike": ["se"]
    },
    {
      "id": "ZA",
      "h": "ざ",
      "k": "ザ"
    },
    {
      "id": "SI",
      "h": "し",
      "k": "シ",
      "kLooksLike": ["tsu", "so"]
    },
    {
      "id": "ZI",
      "h": "じ",
      "k": "ジ"
    },
    {
      "id": "SU",
      "h": "す",
      "k": "ス"
    },
    {
      "id": "ZU",
      "h": "ず",
      "k": "ズ"
    },
    {
      "id": "SE",
      "h": "せ",
      "k": "セ",
      "kLooksLike": ["ya"]
    },
    {
      "id": "ZE",
      "h": "ぜ",
      "k": "ゼ"
    },
    {
      "id": "SO",
      "h": "そ",
      "k": "ソ"
    },
    {
      "id": "ZO",
      "h": "ぞ",
      "k": "ゾ"
    },
    {
      "id": "TA",
      "h": "た",
      "k": "タ",
      "kLooksLike": ["a"]
    },
    {
      "id": "DA",
      "h": "だ",
      "k": "ダ"
    },
    {
      "id": "TI",
      "h": "ち",
      "k": "チ",
      "kLooksLike": [""]
    },
    {
      "id": "DI",
      "h": "ぢ",
      "k": "ヂ"
    },
    {
      "id": "TU",
      "h": "つ",
      "k": "ツ"
    },
    {
      "id": "DU",
      "h": "づ",
      "k": "ヅ"
    },
    {
      "id": "TE",
      "h": "て",
      "k": "テ",
      "kLooksLike": ["chi"]
    },
    {
      "id": "DE",
      "h": "で",
      "k": "デ"
    },
    {
      "id": "TO",
      "h": "と",
      "k": "ト",
      "kLooksLike": ["hi"]
    },
    {
      "id": "DO",
      "h": "ど",
      "k": "ド"
    },
    {
      "id": "NA",
      "h": "な",
      "k": "ナ"
    },
    {
      "id": "NI",
      "h": "に",
      "k": "ニ"
    },
    {
      "id": "NU",
      "h": "ぬ",
      "hLooksLike": ["me", "ne"],
      "k": "ヌ",
      "kLooksLike": ["su", "me"]
    },
    {
      "id": "NE",
      "h": "ね",
      "hLooksLike": ["re", ],
      "k": "ネ"
    },
    {
      "id": "NO",
      "h": "の",
      "k": "ノ"
    },
    {
      "id": "HA",
      "h": "は",
      "hLooksLike": ["ho"],
      "k": "ハ"
    },
    {
      "id": "BA",
      "h": "ば",
      "k": "バ"
    },
    {
      "id": "PA",
      "h": "ぱ",
      "k": "パ"
    },
    {
      "id": "HI",
      "h": "ひ",
      "k": "ヒ",
      "kLooksLike": ["to"]
    },
    {
      "id": "BI",
      "h": "び",
      "k": "ビ"
    },
    {
      "id": "PI",
      "h": "ぴ",
      "k": "ピ"
    },
    {
      "id": "HU",
      "h": "ふ",
      "k": "フ",
      "kLooksLike": ["fu"]
    },
    {
      "id": "BU",
      "h": "ぶ",
      "k": "ブ"
    },
    {
      "id": "PU",
      "h": "ぷ",
      "k": "プ"
    },
    {
      "id": "HE",
      "h": "へ",
      "k": "ヘ"
    },
    {
      "id": "BE",
      "h": "べ",
      "k": "ベ"
    },
    {
      "id": "PE",
      "h": "ぺ",
      "k": "ペ"
    },
    {
      "id": "HO",
      "h": "ほ",
      "hLooksLike": ["ha", "ke"],
      "k": "ホ",
      "kLooksLike": ["o", "wo"]
    },
    {
      "id": "BO",
      "h": "ぼ",
      "k": "ボ"
    },
    {
      "id": "PO",
      "h": "ぽ",
      "k": "ポ"
    },
    {
      "id": "MA",
      "h": "ま",
      "k": "マ",
      "kLooksLike": ["mu"]
    },
    {
      "id": "MI",
      "h": "み",
      "k": "ミ"
    },
    {
      "id": "MU",
      "h": "む",
      "k": "ム"
    },
    {
      "id": "ME",
      "h": "め",
      "hLooksLike": ["nu"],
      "k": "メ",
      "kLooksLike": ["nu"]
    },
    {
      "id": "MO",
      "h": "も",
      "k": "モ"
    },
    {
      "id": "YA",
      "h": "や",
      "k": "ヤ",
      "kLooksLike": ["ma"]
    },
    {
      "id": "YU",
      "h": "ゆ",
      "hLooksLike": ["ne", "re", "wa"],
      "k": "ユ"
    },
    {
      "id": "YO",
      "h": "よ",
      "k": "ヨ"
    },
    {
      "id": "RA",
      "h": "ら",
      "k": "ラ",
      "kLooksLike": ["fu"]
    },
    {
      "id": "RI",
      "h": "り",
      "hLooksLike": ["i"],
      "k": "リ"
    },
    {
      "id": "RU",
      "h": "る",
      "k": "ル"
    },
    {
      "id": "RE",
      "h": "れ",
      "k": "レ"
    },
    {
      "id": "RO",
      "h": "ろ",
      "k": "ロ"
    },
    {
      "id": "WA",
      "h": "わ",
      "k": "ワ"
    },
    {
      "id": "WI",
      "h": "ゐ",
      "k": "ヰ"
    },
    {
      "id": "WE",
      "h": "ゑ",
      "k": "ヱ"
    },
    {
      "id": "WO",
      "h": "を",
      "k": "ヲ"
    },
    {
      "id": "N",
      "h": "ん",
      "k": "ン"
    },
    {
      "id": "VU",
      "h": "ゔ",
      "k": "ヴ"
    }
  ];
  

export default chars;
