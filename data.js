var SLIDE = [
    // OP
    {
        id: 0,
        goto: [1],
        image: "title",
        script: ["作：村田昂大"]
    },
    {
        id: 1,
        goto: [2],
        image: "op_purpose",
        script: ["ある夏の日、中学生三人組があるイベントに出場していた"]
    },
    {
        id: 2,
        goto: [3],
        image: "op_purpose",
        script: ["そのイベントとは金のシャチホコを探すというものだった"]
    },
    {
        id: 3,
        goto: [10],
        image: "op_players",
        script: ["イベント参加者は全員で６人"]
    },
    {
        id: 10,
        goto: [20],
        image: "op_ship",
        script: ["三人組の一人が吐いた"]
    },
    {
        id: 20,
        goto: [100],
        image: "op_island",
        script: ["島が見えてきた"]
    },
    // 1日目
    {
        id: 100,
        goto: [101],
        image: "day1_day",
        script: ["-"]
    },
    {
        id: 101,
        goto: [110],
        image: "day1_meeting",
        script: ["晴れているから、砂浜から探索してみよう"]
    },
    {
        id: 110,
        goto: [111],
        image: "day1_choice",
        script: ["結構岩が多いし隠し所も沢山ある"]
    },
    {
        id: 111,
        goto: [120, 130, 140],
        image: "day1_choice",
        script: ["岩の下を見る", "砂山を崩す", "海にもぐる"]
    },
    {
        id: 120,
        goto: [111],
        image: "day1_rock",
        script: ["カニが出て来て、近くにあった岩へとすぐに行ってしまった"]
    },
    {
        id: 130,
        goto: [200],
        image: "day1_sand",
        script: ["砂の中にシャチホコの尾が見つかった"]
    },
    {
        id: 140,
        goto: [111],
        image: "day1_sea",
        script: ["海の中は様々な生物がいたがその他何も見つからなかった"]
    },
    // 2日目
    {
        id: 200,
        goto: [201],
        image: "day2_day",
        script: ["-"]
    },
    {
        id: 201,
        goto: [202],
        image: "day2_gone",
        script: ["雨の中、小説家が一人で探しに行っていた"]
    },
    {
        id: 202,
        goto: [210],
        image: "day2_investigation",
        script: ["雨が降っているけど、小説家がいなくなった方へいってみよう"]
    },
    {
        id: 210,
        goto: [211],
        image: "day2_choice",
        script: ["雨と雨雲でよけいに怖く感じさせる"]
    },
    {
        id: 211,
        goto: [220, 230, 240],
        image: "day2_choice",
        script: ["右の草むらを探す", "左の墓を開ける", "真中の墓に花をそなえる"]
    },
    {
        id: 220,
        goto: [211],
        image: "day2_frog",
        script: ["カエルが飛び出してきた"]
    },
    {
        id: 230,
        goto: [211],
        image: "day2_left",
        script: ["何もなかったが、もう二度とこんなことはしたくないと思った"]
    },
    {
        id: 240,
        goto: [241],
        image: "day2_center",
        script: ["花をそなえたら墓が動き、中に小説家が閉じ込められていた"]
    },
    {
        id: 241,
        goto: [300],
        image: "day2_ship",
        script: ["小説家は全身怪我をおっていたのでリタイヤとなった"]
    },
    // 3日目
    {
        id: 300,
        goto: [301],
        image: "day3_day",
        script: ["-"]
    },
    { // todo
        id: 301,
        goto: [310],
        image: "day3_meeting",
        script: ["今日は日差しが強いので、日陰のある森の中に行こう"]
    },
    {
        id: 310,
        goto: [311],
        image: "day3_choice",
        script: ["草木がおいしげっていて意外と蒸し暑い"]
    },
    {
        id: 311,
        goto: [320, 330, 340],
        image: "day3_choice",
        script: ["紐をひっぱる", "草を刈る", "木をゆする"]
    },
    {
        id: 320,
        goto: [400],
        image: "day3_rope",
        script: ["紐に縛られていたシャチホコの胴体を見つけた"]
    },
    {
        id: 330,
        goto: [311],
        image: "day3_bush",
        script: ["大きい草を刈ったが何もなかった"]
    },
    {
        id: 340,
        goto: [311],
        image: "day3_tree",
        script: ["ゆすったら木の実が頭に落ちてきて痛かった"]
    },
    // 4日目
    {
        id: 400,
        goto: [401],
        image: "day4_day",
        script: ["-"]
    },
    {
        id: 401,
        goto: [410],
        image: "day4_investigation",
        script: ["いなくなった女優さんの部屋を探そう"]
    },
    {
        id: 410,
        goto: [411],
        image: "day4_choice",
        script: ["僕たちの部屋とあまり変わらない"]
    },
    {
        id: 411,
        goto: [420, 430, 440],
        image: "day4_choice",
        script: ["掛け軸をめくる", "ふすまを開ける", "机の下を見る"]
    },
    {
        id: 420,
        goto: [411],
        image: "day4_turn",
        script: ["忍者の真似をしてめくってみたが、くぼみ一つもなかった"]
    },
    {
        id: 430,
        goto: [411],
        image: "day4_open",
        script: ["枕や布団が雑にしまわれていた"]
    },
    {
        id: 440,
        goto: [441],
        image: "day4_table",
        script: ["女優さんが机の下にいて倒れていた"]
    },
    {
        id: 441,
        goto: [500],
        image: "day4_tired",
        script: ["女優さんは気力がなくなっていたようでリタイヤした"]
    },
    // 5日目
    {
        id: 500,
        goto: [501],
        image: "day5_day",
        script: ["-"]
    },
    {
        id: 501,
        goto: [510],
        image: "day5_meeting",
        script: ["今日は最終日、まだ探していない城の跡地に行こう"]
    },
    {
        id: 510,
        goto: [511],
        image: "day5_choice",
        script: ["原型が分からないくらい壊れている"]
    },
    {
        id: 511,
        goto: [520, 530, 540],
        image: "day5_choice",
        script: ["がれきを探す", "城の裏に行く", "板をはがす"]
    },
    {
        id: 520,
        goto: [1000],
        image: "day5_dig",
        script: ["がれきの下にシャチホコの頭を発見した、これで全てがそろった"]
    },
    {
        id: 530,
        goto: [511],
        image: "day5_back",
        script: ["何もなかった"]
    },
    {
        id: 540,
        goto: [511],
        image: "day5_peeling",
        script: ["虫が沢山いて気持ちが悪い"]
    },
    // END
    {
        id: 1000,
        goto: [1009],
        image: "end_complete",
        script: ["これでみんなに自慢できる"]
    },
    {
        id: 1009,
        goto: [1010],
        image: "end_happen",
        script: ["そのとき！"]
    },
    {
        id: 1010,
        goto: [1011],
        image: "end_steal",
        script: ["「シャチホコをかえせー！」"]
    },
    {
        id: 1011,
        goto: [1020],
        image: "end_steal",
        script: ["「小説家と女優は俺がやったんだ」"]
    },
    {
        id: 1020,
        goto: [1030],
        image: "end_run",
        script: ["記者が逃げ出した"]
    },
    {
        id: 1030,
        goto: [1040, 1050, 1060],
        image: "end_run",
        script: ["先回りをする", "がれきを投げる",  "全力で追いかける"]
    },
    {
        id: 1040,
        goto: [1070],
        image: "end_shortcut",
        script: ["先回りをしたら運良く逃げる場所へといくことができた"]
    },
    {
        id: 1050,
        goto: [1030],
        image: "end_stone",
        script: ["がれきはシャチホコにあたってしまった"]
    },
    {
        id: 1060,
        goto: [1030],
        image: "end_chase",
        script: ["ダメだ！地面が荒れていて転びそうだ"]
    },
    {
        id: 1070,
        goto: [1080],
        image: "end_win",
        script: ["近くにあったロープで記者をぐるぐるまきにした"]
    },
    {
        id: 1080,
        goto: [1090],
        image: "end_complete",
        script: ["シャチホコを取り戻した！"]
    },
    {
        id: 1090,
        goto: [0],
        image: "end_day",
        script: ["-"]
    },
];