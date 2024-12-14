<template>
  <div class="product-card">
    <!-- 商品圖片區域 -->
    <div class="image-gallery">
      <div class="main-image">
        <img :src="mainImage" alt="Main Product" />
      </div>
      <div class="thumbnail-images">
        <img
          v-for="(thumb, index) in thumbnailImages"
          :key="index"
          :src="thumb"
          @click="changeMainImage(thumb)"
          class="thumbnail"
          :class="{ active: thumb === mainImage }"
          alt="Thumbnail"
        />
      </div>
    </div>

    <!-- 商品詳細區域 -->
    <div class="product-details">
      <h2 class="product-title">Premium Wireless Headphones</h2>
      <p class="product-description">
        Experience superior sound quality with our premium wireless headphones.
        Designed for comfort and durability, these headphones offer an
        exceptional listening
      </p>

      <div class="product-price">
        <strong>$199.9</strong>
        <span class="availability">Availability: In Stock</span>
      </div>

      <!-- 選擇尺寸 -->
      <div class="product-option">
        <label>Size:</label>
        <select v-model="selectedSize">
          <option v-for="size in sizes" :key="size" :value="size">
            {{ size }}
          </option>
        </select>
      </div>

      <!-- 選擇顏色 -->
      <div class="product-option">
        <label>Color:</label>
        <select v-model="selectedColor">
          <option v-for="color in colors" :key="color" :value="color">
            {{ color }}
          </option>
        </select>
      </div>

      <!-- 購物按鈕 -->
      <button class="add-to-cart">Add to Cart</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 主圖和縮略圖
const mainImage = ref(
  "https://assets.api.uizard.io/api/cdn/stream/7d4a4486-bd4c-4815-8d3d-c2e08c7d31c9.png"
);
const thumbnailImages = [
  "https://assets.api.uizard.io/api/cdn/stream/7d4a4486-bd4c-4815-8d3d-c2e08c7d31c9.png",
  "https://assets.api.uizard.io/api/cdn/stream/51b64001-dbbd-4de3-a182-4a840b5d7e6f.png",
  "https://assets.api.uizard.io/api/cdn/stream/68eb7b9d-0cc0-45d2-b611-989666da326a.png",
  "https://assets.api.uizard.io/api/cdn/stream/82c768a3-91db-4a45-b1a4-e3fc435ac6bc.png",
];

// 下拉選單資料
const sizes = ["Small", "Medium", "Large"];
const colors = ["Black", "Brown", "Navy"];

const selectedSize = ref("Small");
const selectedColor = ref("Black");

// 更換主圖片
const changeMainImage = (image) => {
  mainImage.value = image;
};
</script>

<style scoped>
.product-card {
  display: flex;
  gap: 20px;
  padding: 20px;
}

.image-gallery {
  display: flex;
  flex-direction: column;
}

.main-image img {
  width: 612px;
  height: 373px;
  border-radius: 10px;
}

.thumbnail-images {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.thumbnail {
  width: 80px;
  height: 80px;
  border: 2px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  object-fit: cover;
}

.thumbnail.active,
.thumbnail:hover {
  border-color: black;
}

.product-details {
  flex: 1;
}

.product-title {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: left;
}

.product-description {
  color: #555;
  margin: 10px 0;
  font-size: 15px;
  text-align: left;
}

.product-price {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.availability {
  color: green;
  font-size: 0.9rem;
}

.product-option {
  margin: 10px 0;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

select {
  padding: 5px;
  font-size: 1rem;
  border: none;
}

.add-to-cart {
  background-color: black;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 15px;
  margin-top: 20px;
  width: 612px;
  height: 33px;
  line-height: 20px;
}

.add-to-cart:hover {
  background-color: #333;
}
</style>
