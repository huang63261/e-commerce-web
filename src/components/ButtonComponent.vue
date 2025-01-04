<template>
  <!--套版注意: 當前被選擇的頁籤，直接套用 active class -->
  <button
    class="custom-button"
    :style="{
      backgroundColor: color,
      fontSize: size,
      width: width,
      height: height,
    }"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    color: {
      type: String,
      default: "#030303",
    },
    size: {
      type: String,
      default: "16px",
    },
    width: {
      type: String,
      default: "200px",
    },
    height: {
      type: String,
      default: "40px",
    },
  },
};
</script>

<style scoped>
.custom-button {
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
}
.custom-button:hover {
  opacity: 0.9;
}

/**
套版注意: 當前被選擇的頁籤，直接套用此class 
*/
.active {
  background-color: #e8e8e8 !important;
  color: rgb(0, 0, 0) !important;
  transform: scale(0.95);
}
</style>
