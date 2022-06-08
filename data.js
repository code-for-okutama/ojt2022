var SLIDE = [
    // OP
    {
        id: 0,
        goto: [10],
        image: "title",
        script: ["作：村田昴大"]
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
        goto: [210],
        image: "day2_investigation",
        script: ["雨が降っているけど、小説家がいなくなった方へいってみよう"]
    },
    {
        id: 210,
        goto: [211],
        image: "day2_`",
        script: ["雨と雨雲でよけいに怖く感じさせる"]
    },
    {
        id: 211,
        goto: [220, 230, 240],
        image: "day2_`",
        script: ["右の墓の草", "左の墓を開ける", "真中の墓に線香"]
    },
    {
        id: 220,
        goto: [211],
        image: "day2",
        script: ["カエルが飛び出してきた"]
    },
    {
        id: 230,
        goto: [211],
        image: "day2",
        script: ["何もなかったが、もう二度とこんなことはしたくないと思った"]
    },
    {
        id: 240,
        goto: [300],
        image: "day3",
        script: ["小説家が中に入っていたので外へ出した"]
    },
    // 3日目
    {
        id: 300,
        goto: [310],
        image: "",
        script: ["今日は日差しが強いし、ぬかれんでいるから森の中に行こう"]
    },
    {
        id: 310,
        goto: [311],
        image: "day3_",
        script: ["草木がおいしげっていて意外と蒸し暑い"]
    },
    {
        id: 311,
        goto: [320, 330, 340],
        image: "day3_",
        script: ["紐をひっぱる", "草を刈る", "木をゆする"]
    },
    {
        id: 320,
        goto: [400],
        image: "day3",
        script: ["紐に縛られていたシャチホコの胴体を見つけた"]
    },
    {
        id: 330,
        goto: [311],
        image: "day3",
        script: ["大きい草を刈ったが何もなかった"]
    },
    {
        id: 340,
        goto: [311],
        image: "day3",
        script: ["ゆすったら木の実が頭に落ちてきて痛かった"]
    },
    // 4日目
    {
        id: 400,
        goto: [410],
        image: "",
        script: ["いなくなった女優さんの部屋を探そう"]
    },
    {
        id: 410,
        goto: [411],
        image: "day4_",
        script: ["僕たちの部屋とあまり変わらない"]
    },
    {
        id: 411,
        goto: [420, 430, 440],
        image: "day4_",
        script: ["掛け軸をめくる", "ふすまを開ける", "机の下を見る"]
    },
    {
        id: 420,
        goto: [411],
        image: "day4",
        script: ["忍者の真似をしてめくってみたが、くぼみ一つもなかった"]
    },
    {
        id: 430,
        goto: [411],
        image: "day4",
        script: ["枕や布団が雑にしまわれていた"]
    },
    {
        id: 440,
        goto: [500],
        image: "day3",
        script: ["女優が机の下にいて倒れていたが暴れていて強制的に帰された"]
    },
    // 5日目
    {
        id: 500,
        goto: [510],
        image: "",
        script: ["今日は最終日、まだ探していない城の跡地に行こう"]
    },
    {
        id: 510,
        goto: [511],
        image: "day5_",
        script: ["原型が分からないくらい壊れている"]
    },
    {
        id: 511,
        goto: [520, 530, 540],
        image: "day5_",
        script: ["がれきを探す", "城の裏に行く", "板をはがす"]
    },
    {
        id: 520,
        goto: [1000],
        image: "day5",
        script: ["がれきの下にシャチホコの頭を発見した、これで全てがそろった"]
    },
    {
        id: 530,
        goto: [511],
        image: "day5",
        script: ["何もなかった"]
    },
    {
        id: 540,
        goto: [511],
        image: "day5",
        script: ["虫が沢山いて気持ちが悪い"]
    },
    // END
    {
        id: 1000,
        goto: [0],
        image: "end",
        script: ["これでみんなに自慢できる"]
    },
];