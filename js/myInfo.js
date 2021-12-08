Vue.createApp({
    data() {
        return {
            firstName: null, 
            email: null,
            phonenumber: null,
            information: [],
            message: null
        }
    },
    methods: {
        save(firstName, email, phonenumber) {
            this.information.push(firstName, email, phonenumber)
            console.log(firstName, email, phonenumber)
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