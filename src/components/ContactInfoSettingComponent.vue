<template>
  <div class="contact-info">
    <h2>Contact Information</h2>
    <div v-if="!isEditable" class="info-display">
      <p>
        <strong>Name</strong>: {{ localContactInfo.firstName }}
        {{ localContactInfo.lastName }}
      </p>
      <p><strong>Gender</strong>: {{ localContactInfo.gender }}</p>
      <p><strong>Birthday</strong>: {{ localContactInfo.birthday }}</p>
      <p>
        <strong>Address</strong>: {{ localContactInfo.city }}
        {{ localContactInfo.district }}
        {{ localContactInfo.street }}
      </p>
      <p><strong>Phone</strong>: {{ localContactInfo.phone }}</p>
      <button class="btn edit" @click="toggleEditMode">Edit</button>
    </div>

    <div v-else>
      <!-- 名字 -->
      <div class="form-group">
        <label for="first-name">First Name:</label>
        <input
          type="text"
          id="first-name"
          v-model="localContactInfo.firstName"
          placeholder="Enter your first name"
        />
      </div>
      <div class="form-group">
        <label for="last-name">Last Name:</label>
        <input
          type="text"
          id="last-name"
          v-model="localContactInfo.lastName"
          placeholder="Enter your last name"
        />
      </div>

      <!-- 電子郵件 -->
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="localContactInfo.email"
          placeholder="Enter your email"
        />
      </div>

      <!-- 電話 -->
      <div class="form-group">
        <label for="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          v-model="localContactInfo.phone"
          placeholder="Enter your phone number"
        />
      </div>

      <!-- 生日 -->
      <div class="form-group">
        <label for="birthday">Birthday:</label>
        <input type="date" id="birthday" v-model="localContactInfo.birthday" />
      </div>

      <!-- 性別 -->
      <div class="form-group">
        <label for="gender">Gender:</label>
        <select id="gender" v-model="localContactInfo.gender">
          <option value="">Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <!-- 地址 -->
      <div class="form-group">
        <label for="address">Address:</label>
        <input
          type="text"
          id="zip-code"
          v-model="localContactInfo.zipCode"
          placeholder="Zip Code"
          class="address-input"
        />
        <input
          type="text"
          id="city"
          v-model="localContactInfo.city"
          placeholder="City"
          class="address-input"
        />
        <input
          type="text"
          id="district"
          v-model="localContactInfo.district"
          placeholder="District"
          class="address-input"
        />
        <input
          type="text"
          id="street"
          v-model="localContactInfo.street"
          placeholder="Street and number"
          class="address-input"
        />
      </div>

      <!-- 按鈕 -->
      <div class="actions">
        <button class="btn save" @click="saveInformation">Save</button>
        <button class="btn cancel" @click="cancelInformation">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";

interface ContactInfo {
  firstName: string;
  lastName: string;
  gender: string;
  birthday: string;
  city: string;
  district: string;
  phone: string;
}

const props = defineProps<{
  contactInfo: ContactInfo;
}>();

const emit = defineEmits(["update"]);

// 使用本地副本來編輯數據，以防止直接修改 props（單向數據流）
const localContactInfo = reactive<ContactInfo>({ ...props.contactInfo });
const isEditable = ref(false);

const toggleEditMode = () => {
  isEditable.value = !isEditable.value;
};

const saveInformation = () => {
  emit("update", { ...localContactInfo });
  isEditable.value = false;
};

const cancelInformation = () => {
  Object.assign(localContactInfo, { ...props.contactInfo });
  isEditable.value = false;
};
</script>

<style scoped>
.contact-info {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.info-display {
  line-height: 1.8;
}

.form-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.address-input {
  margin-bottom: 10px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  text-align: left;
}

input,
select {
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
}

.actions {
  text-align: center;
  margin-top: 20px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #000;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  margin: 0 5px;
}

.btn.edit {
  background-color: #000;
  color: #fff;
  font-size: 1rem;
}

.btn:hover {
  background-color: #747474;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}
</style>
