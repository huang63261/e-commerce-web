<template>
  <div class="auth-container">
    <!-- 左側登入區塊 -->
    <div class="auth-box">
      <h2 class="auth-title">Sign In</h2>
      <form @submit.prevent="handleSignIn">
        <!-- 使用者名稱 -->
        <div class="form-group">
          <input
            type="text"
            placeholder="Username"
            v-model="signInData.username"
            class="form-input"
          />
        </div>
        <!-- 密碼 -->
        <div class="form-group">
          <input
            type="password"
            placeholder="Password"
            v-model="signInData.password"
            class="form-input"
          />
        </div>
        <!-- 登入按鈕 -->
        <button type="submit" class="btn black">Sign In</button>
        <!-- Google 登入按鈕 -->
        <button type="button" class="btn google" @click="handleGoogleSignIn">
          <i class="google-icon">G</i> Sign in with Google
        </button>
      </form>
    </div>

    <!-- 分隔線 -->
    <div class="divider"></div>

    <!-- 右側註冊區塊 -->
    <div class="auth-box">
      <h2 class="auth-title">Join Us Now!</h2>
      <p class="auth-description">
        Become a member and enjoy exclusive discounts during our campaigns.<br />
        Plus, you'll receive updates on the latest product launches directly to
        your inbox.
      </p>
      <button type="button" class="btn primary" @click="navigateToSignUp">
        Sign Up
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// 表單資料
const signInData = ref({
  username: "",
  password: "",
});

// 處理登入表單提交
const handleSignIn = () => {
  console.log("Sign In Data:", signInData.value);
};

// 處理 Google 登入
const handleGoogleSignIn = () => {
  console.log("Google Sign In");
};

// 導向註冊頁面
const navigateToSignUp = () => {
  console.log("Navigate to Sign Up");
};
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  background-color: #f7efd2;
  padding: 50px;
  border-radius: 8px;
}

.auth-box {
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 26%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.divider {
  width: 1px;
  background-color: #ffffff;
  height: auto;
  align-self: stretch;
}

.auth-title {
  color: #000;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.auth-description {
  color: #000;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-input {
  color: #000;
  background-color: #ebebeb;
  width: 100%;
  padding: 10px 0;
  font-size: 1rem;
  text-indent: 10px;
  border: 1px solid #ccc;
  border-radius: 12px;
}

.form-input:focus {
  outline: none;
  border-color: #000;
}

.form-input::placeholder {
  color: #ccc;
  font-size: 1rem;
}

.btn {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 10px;
}

.btn:focus {
  outline: none;
}

.btn.black {
  background-color: #000;
  color: #fff;
}

.btn.google {
  background-color: #f5f5f5;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.google-icon {
  margin-right: 10px;
  font-weight: bold;
}
</style>
