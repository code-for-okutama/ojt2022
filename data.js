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
        script: [""]
    },
    {
        id: 211,
        goto: [220, 230, 240],
        image: "day2_`",
        script: [""]
    },
    {
        id: 220,
        goto: [211],
        image: "day2",
        script: [""]
    },
    {
        id: 230,
        goto: [211],
        image: "day2",
        script: [""]
    },
    {
        id: 240,
        goto: [211],
        image: "day2",
        script: [""]
    },
    // 3日目
    {
        id: 300,
        goto: [310],
        image: "",
        script: [""]
    },
    {
        id: 310,
        goto: [311],
        image: "day3_",
        script: [""]
    },
    {
        id: 311,
        goto: [320, 330, 340],
        image: "day3_",
        script: [""]
    },
    {
        id: 320,
        goto: [311],
        image: "day3",
        script: [""]
    },
    {
        id: 330,
        goto: [311],
        image: "day3",
        script: [""]
    },
    {
        id: 340,
        goto: [311],
        image: "day3",
        script: [""]
    },
    // 4日目
    {
        id: 400,
        goto: [410],
        image: "",
        script: [""]
    },
    {
        id: 410,
        goto: [411],
        image: "day4_",
        script: [""]
    },
    {
        id: 411,
        goto: [420, 430, 440],
        image: "day4_",
        script: [""]
    },
    {
        id: 420,
        goto: [411],
        image: "day4",
        script: [""]
    },
    {
        id: 430,
        goto: [411],
        image: "day4",
        script: [""]
    },
    {
        id: 440,
        goto: [411],
        image: "day3",
        script: [""]
    },
    // 5日目
    {
        id: 500,
        goto: [510],
        image: "",
        script: [""]
    },
    {
        id: 510,
        goto: [511],
        image: "day5_",
        script: [""]
    },
    {
        id: 511,
        goto: [520, 530, 540],
        image: "day5_",
        script: [""]
    },
    {
        id: 520,
        goto: [511],
        image: "day5",
        script: [""]
    },
    {
        id: 530,
        goto: [511],
        image: "day5",
        script: [""]
    },
    {
        id: 540,
        goto: [511],
        image: "day5",
        script: [""]
    },
    // END
    {
        id: 1000,
        goto: [0],
        image: "",
        script: [""]
    },
];