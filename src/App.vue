<template>
    <router-view/>
</template>

<style>
    *{
        box-sizing: border-box;
        font-family: 'Roboto',sans-serif;
        
    }
</style>


<script>
export default {
    name: 'App',
    data() {
        return {
            isLogin: false,
        };
    },
};
</script>
