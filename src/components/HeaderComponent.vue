<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="left-box">
      <font-awesome-icon :icon="['fas', 'shop']" class="font" />
      <a class="menu" href="#">HOME</a>
      <div class="dropdown">
        <a class="menu" href="#">CLOTHING</a>
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="dropdown-icon"
        />
        <!-- 下拉選單內容 -->
        <div class="dropdown-menu">
          <a href="#" class="dropdown-item">T-Shirts</a>
          <a href="#" class="dropdown-item">Jeans</a>
          <a href="#" class="dropdown-item">Jackets</a>
          <a href="#" class="dropdown-item">Accessories</a>
        </div>
      </div>
      <div class="dropdown">
        <a class="menu" href="#">ACCESSORIES</a>
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="dropdown-icon"
        />
        <!-- 下拉選單內容 -->
        <div class="dropdown-menu">
          <a href="#" class="dropdown-item">Hats</a>
          <a href="#" class="dropdown-item">Jewelry</a>
          <a href="#" class="dropdown-item">Bags</a>
        </div>
      </div>
      <a class="menu" href="#">CONTACT</a>
    </div>
    <div class="right-box">
      <font-awesome-icon
        :icon="['fas', 'magnifying-glass']"
        class="font small-font"
      />
      <font-awesome-icon
        :icon="['fas', 'cart-shopping']"
        class="font small-font"
      />
      <font-awesome-icon :icon="['fas', 'user']" class="font small-font" />
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 3%;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 1000;
}
.left-box {
  display: flex;
  justify-content: flex-start;
  padding-left: 8%;
}
.right-box {
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  padding-right: 8%;
}
.menu {
  margin-left: 8%;
  font-size: 15px;
  color: black;
  margin-top: auto;
  margin-bottom: auto;
}
.font {
  margin-right: 25px;
  font-size: 30px;
  margin-top: auto;
  margin-bottom: auto;
}
.small-font {
  font-size: 20px;
}

.dropdown {
  margin-left: 8%;
  position: relative;
  width: auto;
  display: flex;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: none;
  flex-direction: column;
  min-width: 150px;
  z-index: 1000;
}

.dropdown:hover .dropdown-menu {
  display: flex;
}

.dropdown-item {
  padding: 10px;
  color: black;
  text-decoration: none;
  font-size: 14px;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
}

.dropdown-icon {
  font-size: 10px;
  margin: auto;
  margin-left: 5%;
}
</style>
