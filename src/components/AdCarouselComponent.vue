<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

interface Ad {
  // 圖片 URL
  imageUrl: string;
  // 圖片描述
  alt: string;
}

// 定義 props
const props = defineProps<{
  // 廣告圖片資料
  ads: Ad[];
  // 自動播放間隔，預設 3 秒
  interval?: number;
}>();

// 提供預設值
const defaultInterval = 3000;

// 初始化 interval，並提供明確的類型
const autoPlayInterval: number = props.interval || defaultInterval;
</script>

<template>
  <div class="carousel">
    <!-- Swiper -->
    <swiper
      :modules="[Autoplay, Navigation]"
      :autoplay="{ delay: autoPlayInterval, disableOnInteraction: false }"
      :loop="true"
      :navigation="false"
      class="my-swiper"
    >
      <!-- 每張圖片 -->
      <swiper-slide v-for="(ad, index) in ads" :key="index">
        <img :src="ad.imageUrl" :alt="ad.alt" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.carousel {
  width: 100%;
  height: 76 em;
}

.my-swiper {
  width: 100%;
  height: 100%;
}

.my-swiper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
