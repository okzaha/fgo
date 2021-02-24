<template>
  <div id="app">
     <b-navbar type="dark" variant="danger">
    <b-navbar-nav>  
     
      <b-img src="https://grandorder.wiki/images/8/80/Icon_Coin_Saber.png"  width="50" ></b-img>
    <b-nav-item to="/" >หน้าร้านค้า</b-nav-item><h3> </h3>
     
    </b-navbar-nav>
  </b-navbar>
  <router-view />
 
  </div>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
</style>
<script>

export default {
  
   data(){
      return{
       
      }
    },
   methods:{

   }
}
</script>>
