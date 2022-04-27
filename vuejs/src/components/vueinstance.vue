<template>
    <div>
        <h1>vue instance</h1>
        <p>{{sayhello()}}</p>
    </div>
</template>
<script>


export default{
    name:"InstancE",
    data(){
        return{
           title:"Hello World!"
        }
        
    },
    methods:{
      sayhello:function(){
          return this.title;
      }
    }
}
</script>
