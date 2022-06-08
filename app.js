var app = new Vue({
    el: '#app',
    data: {
        slideIdx: 0,
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
            return "images/" + SLIDE[this.slideIdx].image + ".jpg";
        },
        getScript() {
            return SLIDE[this.slideIdx].script[0];
        },
        isChoiceScene() {
            return 1 < SLIDE[this.slideIdx].script.length
        }
    },
})
