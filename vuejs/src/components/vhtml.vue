<template>
    <div>
        <h1>vue-html</h1>
        <p>{{title}}</p>
        <p>{{sayhello()}} -<a href="link">Google</a></p>
      <!--  <p>{{finishedlink}}</p> it will work --> 
      <p v-html="finishedlink"></p>

    </div>
</template>
<script>


export default {
    name:"VhtmL",
    data(){
        return{
           title:"hello world", 
           link:"http://google.com",
           finishedlink:'<a href="http://google.com">Google</a>'       
        }
    },
    methods:{
        sayhello:function(){
            this.title="hello!"
            return this.title
        }
    }
}
</script>
