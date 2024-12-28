<template>
  <div class="progress-steps">
    <div
      v-for="(step, index) in steps"
      :key="index"
      :class="['step', { active: index === currentStep }]"
    >
      <div class="step-circle">
        <span>{{ index + 1 }}</span>
      </div>
      <div class="step-title">
        <span>{{ step }}</span>
      </div>
      <div v-if="index < steps.length - 1" class="step-dots">
        <span>></span>
        <span>></span>
        <span>></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const steps = [
  "Cart Confirmation",
  "Shipping & Payment Information",
  "Order Confirmation",
];

const currentStep = 0; // Modify this value to set the active step
</script>

<style scoped>
.progress-steps {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  flex-wrap: wrap; /* 添加以允許元素在手機上換行 */
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex: 1;
  min-width: 100px; /* 避免過小的壓縮 */
}

.step-circle {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #e5e5e5;
  color: #000;
  font-weight: bold;
  margin-bottom: 10px;
}

.step.active .step-circle {
  background-color: #000;
  color: #fff;
}

.step-title {
  text-align: center;
  font-size: 0.9rem;
  line-height: 1.2;
}

.step-dots {
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
}

@media (max-width: 768px) {
  .progress-steps {
    flex-direction: column; /* 垂直排列元素 */
    align-items: flex-start; /* 將元素靠左對齊 */
  }

  .step {
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
  }

  .step-dots {
    position: static;
    transform: none;
    margin-left: 10px;
  }
}
</style>
