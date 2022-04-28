<template v-if="show">
    <div>
        <h1>
            if condition
            <p v-if="show">you can see me!</p>
            <p v-else>Now you see me</p>
            <p>do you also see me</p>
            <button @click="show=!show">switch</button>
            <template>
                <p>inside a template</p>
            </template>
        </h1>
    </div>
</template>
<script>


export default { 
    name:"IfconditioN",
    data(){
       return{
          show:true
       } 
    }
}
</script>
