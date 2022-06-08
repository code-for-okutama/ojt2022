var SLIDE = [
    {
        idx: 0,
        goto: [1],
        image: "slide_0.png",
        script: ["Slide_0"]
    },
    {
        idx: 1,
        goto: [2, 3, 4],
        image: "slide_1.png",
        script: ["岩を持ち上げる", "もぐる", "穴を掘る"]
    },
    {
        idx: 2,
        goto: [1],
        image: "slide_2.png",
        script: ["False"]
    },
    {
        idx: 3,
        goto: [1],
        image: "slide_0.png",
        script: ["False"]
    },
    {
        idx: 4, 
        goto: [5],
        image: "slide_0.png",
        script: ["Ture"]
    },
    {
        idx: 5,
        goto: [0],
        image: "slide_0.png",
        script: ["Final"]
    },
];