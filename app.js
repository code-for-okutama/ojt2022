var app = new Vue({
    el: '#app',
    data: {
        slideIdx: 0,
    },
    created: function () {
    },
    methods: {
        next(idx) {
            let targetId = SLIDE[this.slideIdx].goto[idx];
            let foundIdx = -1;
            for (let idx = 0; idx < SLIDE.length; idx++) {
                if (SLIDE[idx].id === targetId) {
                    foundIdx = idx;
                    break;
                }
            }
            
            if (foundIdx === -1) {
                alert("error");
            }
            
            this.slideIdx = foundIdx;
        },
        getChoices() {
            return SLIDE[this.slideIdx].script;
        },
        getImage() {
            return "images/" + SLIDE[this.slideIdx].image + ".jpg";
        },
        getScript() {
            let scripts = SLIDE[this.slideIdx].script;
            return scripts.length === 1 ? SLIDE[this.slideIdx].script[0] : "-";
        },
        isChoiceScene() {
            return 1 < SLIDE[this.slideIdx].script.length
        }
    },
})

window.addEventListener("orientationchange", ()=>{
    let state = getAngle();
    if (state.isLandscape) {
        alert("画面を「たて」向きにしてください\n↺");
    }
});

function getAngle(){
    // 角度を取得
    let angle = screen && screen.orientation && screen.orientation.angle;
    if ( angle === undefined ) {
        angle = window.orientation;    // iOS用
    }

    const isPortrait = (angle === 0);
    return({
        value: angle,           // 具体的な角度
        isPortrait: isPortrait,      // 縦向き
        isLandscape: ! isPortrait,    // 横向き
    });
}