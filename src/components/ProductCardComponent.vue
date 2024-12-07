<template>
  <div class="product-grid">
    <div class="product-card" v-for="(product, index) in products" :key="index">
      <div class="product-image">
        <img :src="product.image" :alt="product.name" />
      </div>
      <div class="product-details">
        <div class="select-part">
          <div class="color-select">
            <div
              class="color"
              v-for="(color, index) in colors"
              :key="index"
              :style="{ backgroundColor: color }"
            ></div>
          </div>
          <div class="favorite">
            <font-awesome-icon
              v-if="isSolidHeart"
              :icon="['far', 'heart']"
              class="none-favorite"
              @click="toggleHeart"
            />
            <font-awesome-icon
              v-else
              :icon="['fas', 'heart']"
              class="red-favorite"
              @click="toggleHeart"
            />
          </div>
        </div>
        <p class="category">{{ product.category }}</p>
        <p class="name">{{ product.name }}</p>
        <p class="price">
          <span class="original-price">${{ product.originalPrice }}</span>
          <span class="discount-price">${{ product.discountPrice }}</span>
        </p>
        <div class="ratings">
          <font-awesome-icon :icon="['fas', 'star']" />&nbsp;[{{
            product.score
          }}]&nbsp;&nbsp;({{ product.reviews }})
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const products = [
  {
    name: "The North Face T-shirt",
    category: "Man's",
    image:
      "https://images.unsplash.com/photo-1541955590003-bc7ae84eb4d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxNnx8bWFuJTI3cyUyMGNsb3RoaW5nfGVufDF8fHx8MTczMjYwMTg5MHww&ixlib=rb-4.0.3&q=80&w=1080",
    originalPrice: 18.99,
    discountPrice: 14.99,
    score: 4.3,
    reviews: 3,
  },
];
let isSolidHeart = ref(true);
function toggleHeart() {
  isSolidHeart.value = !isSolidHeart.value;
}
const colors = ["#786739", "#030303"];
</script>
<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.product-card {
  width: 300px;
  height: 526px;
  border: 1px solid #ddd;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  background-size: "cover";
  background-repeat: "no-repeat";
}

.product-card:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.product-image {
  position: relative;
}

.product-image img {
  width: 100%;
  height: 300px;
  border-radius: 5px;
}

.product-image:hover .add-to-cart {
  opacity: 1;
}

.product-details {
  padding: 10px;
  text-align: center;
}

.price {
  font-size: 16px;
  display: flex;
  justify-content: flex-start;
}

.original-price {
  text-decoration: line-through;
  color: #000000;
  margin-right: 5px;
  font-weight: bold;
}

.discount-price {
  color: #e63946;
  font-weight: bold;
}

.select-part {
  display: flex;
}

.color-select {
  display: flex;
  width: 70%;
  height: 20px;
}

.color {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 5px;
}

.favorite {
  margin-left: auto;
  width: 15%;
}

.none-favorite {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.red-favorite {
  background: none;
  border: none;
  font-size: 20px;
  color: red;
  cursor: pointer;
}

.category {
  font-size: 10px;
  display: flex;
  justify-content: flex-start;
}

.name {
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: flex-start;
  opacity: 0.7;
}

.ratings {
  font-size: 10px;
  margin-top: 5px;
  display: flex;
  justify-content: flex-start;
}
</style>
