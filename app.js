const {createApp} = Vue
createApp({
    data(){
        return{
            pStatus:true,
            pStyle:["user1"],
            pBackground:''
          }
    },
    methods:{
          toggleVisibility(){
            this.pStatus = !this.pStatus
            console.log(this.pStatus)
          },
    }
}).mount('#assignment');