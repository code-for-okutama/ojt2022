var SLIDE_MAX = 1;
var CHOICE = [
    ["a", "b", "c"],
    ["d", "e", "f"],
];

var app = new Vue({
    el: '#app',
    data: {
        slideIdx: 0,
        subscript: "init",
        list: CHOICE,
        choiceScene: false,
    },
    created: function () {
    },
    methods: {
        next() {
            if (this.slideIdx < SLIDE_MAX) {
                this.slideIdx++;
            }
        },
        get() {
            return this.list[0];
        }
    },
})

// --
function waitSec(sec) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, sec * 1000);
    })
}
