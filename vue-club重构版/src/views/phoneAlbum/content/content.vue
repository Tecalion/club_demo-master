<template>
  <div class="main">
    <div class="content-main" :style="{ width: isMobile ? '100%' : '85%'}">
      <h1 style=" text-align: center;font-size: 3rem">  社团相册 </h1>
      <img-wall></img-wall>
    </div>
  </div>
</template>

<style scoped>


.main{
  background-color: rgba(177,196,210);
}
.content-main {
//display: flex;
  align-items: center;
  width: 85%;
  justify-content: center;
  height: 100%;
  background-color: #ffffff;
  margin: 0 auto;
}


</style>


<script setup>

import Notice from "@/components/Content/notice/notice.vue";
import { ref } from 'vue';
import Carousel from "@/components/Content/notice/carousel.vue";
import Answer from "@/views/home/answer/answer.vue";
import Introduce from "@/views/home/introduce/introduce.vue";
import Department from "@/views/home/events/events.vue";
import ImgWall from "@/views/phoneAlbum/content/imgWall.vue";
//判断是否是移动端
const isMobile = ref(window.innerWidth < 768);

//监听窗口大小变化
window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth < 768;
});


const text = ref('')


</script>
