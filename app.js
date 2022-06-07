var app = new Vue({
    el: '#app',
    data: {
        imageFile: "test.png",
    },
    created: function () {
    },
    mounted() {
        document.addEventListener('keydown', this.onKeyDown)
    },
    beforeDestroy() {
        document.removeEventListener('keydown', this.onKeyDown)
    },
    methods: {
    }
})

// --
function waitSec(sec) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, sec * 1000);
    })
}
