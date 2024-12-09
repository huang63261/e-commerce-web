<template>
  <footer class="footer">
    <!-- Footer 內容 -->
    <div class="footer-content">
      <!-- 品牌 -->
      <span class="footer-brand">{{ brandName }}</span>
      <!-- 社交媒體平台 -->
      <div class="footer-links">
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ link.name }}
        </a>
      </div>
      <!-- 版權訊息 -->
      <div class="footer-copyright">
        <span>{{ copyright }}</span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

interface SocialLink {
  name: string; // 社交媒體平台名稱
  url: string; // 連結網址
}

defineProps<{
  brandName: string; // 品牌名稱
  socialLinks: SocialLink[]; // 社群媒體連結
  copyright: string; // 版權訊息
}>();
</script>

<style scoped>
/* Footer 整體樣式 */
.footer {
  background-color: #000; /* 黑色背景 */
  color: #fff; /* 白色文字 */
  text-align: center;
  padding: 20px 10px;
  font-family: Arial, sans-serif;
}

/* Footer 內容樣式 */
.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
}

/* 品牌名稱樣式 */
.footer-brand {
  font-size: 1.5rem;
  font-weight: bold;
}

/* 社交媒體平台連結樣式 */
.footer-links a {
  color: #fff; /* 白色文字 */
  margin: 0 10px;
  text-decoration: none;
  font-size: 1rem;
}

.footer-links a:hover {
  text-decoration: underline; /* 滑過時添加下劃線 */
}

/* 版權訊息樣式 */
.footer-copyright {
  margin-top: 10px;
  font-size: 0.875rem; /* 小字體 */
}
</style>
