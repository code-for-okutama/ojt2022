var app = new Vue({
    el: '#app',
    data: {
        slideIdx: 0,
        choiceScene: false,
    },
    created: function () {
    },
    methods: {
        next(idx) {
            this.slideIdx = SLIDE[this.slideIdx].goto[idx];
        },
        getChoices() {
            return SLIDE[this.slideIdx].script;
        },
        getImage() {
            return SLIDE[this.slideIdx].image;
        },
        getScript() {
            return SLIDE[this.slideIdx].script[0];
        },
        isChoiceScene() {
            return 1 < SLIDE[this.slideIdx].script.length
        }
    },
})
