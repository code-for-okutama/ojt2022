var SLIDE = [
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
    {
        id: 200,
        goto: [0],
        image: "day2_investigation",
        script: ["雨が降っているけど、小説家がいなくなった方へいってみよう"]
    },
];