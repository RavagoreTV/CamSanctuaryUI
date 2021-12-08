const baseUrl = "https://camsanctuary.azurewebsites.net/api/sender"

Vue.createApp({
    data() {
        return {
            logs: []
        }
    },
    methods: {
        getAllWanted() {
            this.helperGetAndShow(baseUrl)
        },
        async helperGetAndShow(url) { 
            console.log(url)
            try {
                const response = await axios.get(url)
                console.log("Efter get")
                this.logs = await response.data.items
                console.log(this.logs)
            } catch (ex) {
                alert(ex.message) 
            }
        }
    }
}).mount("#app")