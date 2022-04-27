<template>
    <div>
        <h1>v-bind attributes</h1>
        
         <!--  <p>{{ sayhello() }} -<a href= "{{link}}">Google></a></p>  it will wont work-->
        <p>{{ sayhello() }} -<a v-bind:href="link">Google</a></p>
     
        
       
</div>
</template>
<script>


export default {
    name:"VbinD",
    data(){
        return{
            title:"hello",
            link:'http://google.com'
        }
    },
    methods:{
        sayhello:function() {
            return this.title
        }
    }
}
</script>
