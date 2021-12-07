const baseUrl = "https://api.fbi.gov/wanted/v1/list"

Vue.createApp({
    data() {
        return {
            wanted: []
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
                this.wanted = await response.data.items
                console.log(this.wanted)
            } catch (ex) {
                alert(ex.message) 
            }
        },
        getDetails(title) {
            this.detail = this.items.find(item => item.title == title)
        },
    }
}).mount("#app")