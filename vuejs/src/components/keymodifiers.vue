<template>
    <div>
        <h1>key modifiers</h1>
        <input type="text" v-on:keyup="alertme">  <!--we can use more properties like v-on:keyup.enter.space {{if we give enter and space it wil alert}}-->
    </div>
</template>
<script>


export default{
    name:"KeyModifiers",
    data(){
        return{

        }
    },
    methods:{
        alertme(){
        alert("alert!")
        }
    }
}
</script>
