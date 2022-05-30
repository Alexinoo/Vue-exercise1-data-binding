 const app = Vue.createApp({    

    data(){
        return {

            Person : {
                Name: 'Alex',
                Age: 30
            },

            Image : {
                url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            }

          
        }
    },

    methods : {

        calculateAge(){

            return this.Person.Age + 5
        },

        randomNumber(){

            return Math.random()
        } ,

    }


 })

app.mount('#assignment')