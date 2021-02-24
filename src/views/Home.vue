<template>
  <div class="p-4">
    <b-icon icon="house-door-fill" animation="spin"  ></b-icon> รายการสินค้า <b-icon icon="house-door-fill" animation="spin"  ></b-icon>  
  
      <b-row>

 
  
<b-col>
    <p>Artoria Pendragon <code>24$</code>:</p>
  <b-button class="p-3 mb-2 bg-white text-dark" @click="$store.commit('click11')" >
    <b-img src="https://appmedia.jp/wp-content/uploads/2016/06/c5f3771c96a6c0ed7070e5f63bd0214d.jpg" width="170" ></b-img></b-button>
   <b-col ><b-button size="sm" variant="danger" @click="$store.commit('click11')" >ลงรถเข็น <b-badge variant="light">{{$store.state.click1}}</b-badge></b-button>  <b-button size="sm" variant="danger" @click="$store.commit('click121')" >เอาออกรถเข็น </b-button>
   </b-col>
</b-col>
<b-col>
  <p>Artoria Pendragon (Alter) <code>15$</code>:</p>
  <b-button class="p-3 mb-2 bg-white text-dark" @click="$store.commit('click22')" >
    <b-img src="https://www.wicurio.com/grand_order/index.php?plugin=resizeimage&page=%E3%82%A8%E3%82%A4%E3%83%97%E3%83%AA%E3%83%AB%E3%83%95%E3%83%BC%E3%83%AB%EF%BC%88H28%EF%BC%89&w=163&h=280&image=0034128.jpg" width="170"></b-img></b-button>
 <b-col ><b-button size="sm" variant="danger" @click="$store.commit('click22')" >ลงรถเข็น 
   <b-badge variant="light">{{$store.state.click2}}</b-badge></b-button>  <b-button size="sm" variant="danger" @click="$store.commit('click122')" >เอาออกรถเข็น </b-button>
   </b-col></b-col>
<b-col>
  <p>Okita Sōji <code>24$</code>:</p>
  <b-button class="p-3 mb-2 bg-white text-dark" @click="$store.commit('click33')" >
    <b-img src="https://i.pinimg.com/236x/34/f5/2f/34f52fdbfa15318e91201feda7a2b6ab.jpg" width="170" ></b-img></b-button>
 <b-col ><b-button size="sm" variant="danger" @click="$store.commit('click33')" >ลงรถเข็น
    <b-badge variant="light">{{$store.state.click3}}</b-badge></b-button>  <b-button size="sm" variant="danger" @click="$store.commit('click123')" >เอาออกรถเข็น </b-button>
   </b-col>
   </b-col>
   </b-row>
   <br>
   <b-row>
  <b-col>
    <p>Astolfo (Saber) <code>24$</code>:</p>
 <b-button class="p-3 mb-2 bg-white text-dark" @click="$store.commit('click44')" >
    <b-img src="https://appmedia.jp/wp-content/uploads/2020/03/b4a5b2165a9271cac91761300c74376e.jpg" width="170"></b-img></b-button>
   <b-col ><b-button size="sm" variant="danger" @click="$store.commit('click44')" >ลงรถเข็น 
     <b-badge variant="light">{{$store.state.click4}}</b-badge></b-button>  <b-button size="sm" variant="danger" @click="$store.commit('click124')" >เอาออกรถเข็น </b-button>
   </b-col>
</b-col>
<b-col>
  <p>Astolfo  <code>15$</code>:</p>
 <b-button class="p-3 mb-2 bg-white text-dark" @click="$store.commit('click55')" >
    <b-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpCVVIzqyP3u7peTztanjMTuCC-rEF8jhhYA&usqp=CAU" width="170" ></b-img></b-button>
 <b-col ><b-button size="sm" variant="danger" @click="$store.commit('click55')">ลงรถเข็น 
   <b-badge variant="light">{{$store.state.click5}}</b-badge></b-button> <b-button size="sm" variant="danger" @click="$store.commit('click125')" >เอาออกรถเข็น </b-button>
   </b-col></b-col>
<b-col>
  <p>Osakabehime<code>24$</code>:</p>
  <b-button class="p-3 mb-2 bg-white text-dark" @click="$store.commit('click66')" >
    <b-img src="https://www.inside-games.jp/imgs/zoom/793398.jpg"  width="170" ></b-img></b-button>
 <b-col ><b-button size="sm" variant="danger" @click="$store.commit('click66')" >ลงรถเข็น 
   <b-badge variant="light">{{$store.state.click6}}</b-badge></b-button>  <b-button size="sm" variant="danger" @click="$store.commit('click126')" >เอาออกรถเข็น </b-button>
   </b-col>
  </b-col>
  </b-row>
  <br>
  <h4><b-icon icon="cart4" animation="spin"  ></b-icon> รายการสินค้าที่สั่งใว้ <b-icon icon="cart4" animation="spin"  ></b-icon></h4>
    <h5>ราคาของทั้งหมด = {{$store.state.click7}} $</h5>
    <b-col>
    <b-button size="sm" variant="danger" @click="$store.commit('click111')" >เอาออกรถเข็นทั้งหมด </b-button> <b-button size="sm" variant="danger"  v-on:click="$store.commit('click1111')" @click="$store.commit('click111')" >ตกลง</b-button></b-col>
   </div>
  

</template>

<script>
 

</script>
