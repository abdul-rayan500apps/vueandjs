<template>
    <div>
        <p v-once >{{title}}</p>
         <p>{{ sayhello() }} -<a v-bind:href="link">Google</a></p>
    </div>
</template>
<script>


export default {
    name:"OncE",
    data(){
        return{
            title:"hello world!",
            link:'http://google.com'
            
        }
    },
    methods:{
        sayhello:function(){
            this.title="hello"
            return this.title
        }
    }
}
</script>
