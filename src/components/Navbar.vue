<template>
  <div class="navbar-web">
      <div  @click="openSidebar" class="menu-icon"><i class="fa fa-bars text-white" aria-hidden="true"></i></div>
      <div class="logout"><i class="fa fa-power-off text-white" aria-hidden="true"></i></div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isOpen:true
        }
    },
    methods:{
        openSidebar(){
            this.isOpen = !this.isOpen
            this.$emit('openSidebar',this.isOpen)
        }
    }
}
</script>

<style>
.navbar-web{
  height: 40px;
  /* width: 100vh;
  max-width: 100vh; */
  /* max-width: 100vh; */
  background-color: rgb(128, 0, 0);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;

}
.logout{
    color: white;
    padding: 2px;
    border-radius: 2px;
}
.menu-icon{
    font-size: 18px;
}
.menu-icon:hover{
    cursor: pointer;
}
.logout:hover{
    cursor: pointer;
}
.text-white{
    color: white;
}
</style>