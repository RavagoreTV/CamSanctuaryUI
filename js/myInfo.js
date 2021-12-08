Vue.createApp({
    data() {
        return {
            info: null, 
            information: [],
            message: null
        }
    },
    methods: {
        save(info) {
            this.information.push(info)
        },
        show() {
            if (this.information == null || this.information.length == 0) {
                this.message = "empty"
            }
            else {
                this.message = this.information.toString()
            }
        }
    }
}).mount("#app")