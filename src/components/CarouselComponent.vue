<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const imageSrc = ref([
  "https://images.unsplash.com/photo-1610358802969-2b20b64947ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwyNXx8d2ludGVyJTIwY2xvdGhpbmclMjBtb2RlbHxlbnwxfHx8fDE3MzI2MDYyMTh8MA&ixlib=rb-4.0.3&q=80&w=1080",
  "https://images.unsplash.com/photo-1574784619102-f7e342f21aa0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwyfHx3aW50ZXIlMjBjbG90aGluZyUyMGNvbGxlY3Rpb258ZW58MXx8fHwxNzMyNjA2MjcyfDA&ixlib=rb-4.0.3&q=80&w=1080"
]);
const modules = [Autoplay, Pagination, Navigation];
</script>

<template>
  <swiper :slidesPerView="1" :spaceBetween="30" :loop="true" :pagination="{ clickable: true }"
    :autoplay="{ delay: 2500, disableOnInteraction: false }" :navigation="{
      clickable: true,
      prevEl: null,
      nextEl: null
    }" :modules="modules" class="mySwiper">
    <swiper-slide v-for="(image, index) in imageSrc" :key="index">
      <img :src="image" :alt="'Slide ' + (index + 1)" />
    </swiper-slide>
  </swiper>
</template>

<style scoped>
/* 隱藏上下按鈕 */
.swiper-button-next,
.swiper-button-prev {
  display: none !important;
}

.swiper {
  margin-top: 2%;
  width: 90%;
  height: 700px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 似乎沒有生效 */
.swiper-pagination-bullet {
  background-color: #e8e8e8 !important;
  opacity: 1;
}

.swiper-pagination-bullet-active {
  background-color: #c2c2c2 !important;
}
</style>
