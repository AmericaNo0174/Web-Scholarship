<template>
  <div class='container-main'>
        <div class='banner'>
          <a href='https://www.figma.com/file/8J0idMURPq4CGbiXlolkWq/Untitled?node-id=84%3A5'>
          <img src="../../assets/main1.png" width="100%" >
          </a>
      </div>
      <div class='banner2'>
          <a href="https://www.youtube.com/">
          <img src="../../assets/main2.svg" width="100%" >
          </a>
          
      </div>
      <div class='banner3'>
          <a href="https://reg.src.ku.ac.th/res/">
              <img src="../../assets/main3.svg"  width="100%" >
          </a>
          
      </div>
      <Footer/>
  </div>
</template>

<script>
import Footer from '../../components/footer.vue'
export default {
    components:{
        Footer
    },
    mounted() {
        // if(!window.isLogin){
        //     this.$router.push({name:'Login'})
        // }
    }
}
</script>

<style>
.container-main {
    width: 100%;
    text-align: center;
    max-height: 90vh;
    overflow-y:auto;
    object-fit: cover;
   
    
  }
  .banner{
    /* border: 1px solid rgb(25, 0, 255); */
    width:100%;
    display:flex;
    height:33%;
    flex-direction: column;
}
  .banner2{
    /* border: 1px solid rgb(255, 0, 0); */
    width:100%;
    display:flex;
    height:33%;
    flex-direction: column;
}
.banner3{
    /* border: 1px solid rgb(255, 0, 0); */
    width:100%;
    display:flex;
    height:33%;
    flex-direction: column;
}

</style>