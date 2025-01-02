<template>
  <div class="shipping-address">
    <h2>Shipping Address Management</h2>

    <div v-if="!isEditing">
      <div v-if="addresses.length === 0" class="no-addresses">
        <p>No shipping addresses available.</p>
        <button class="btn add" @click="startAdding">Add New Address</button>
      </div>

      <div v-else>
        <div
          v-for="(address, index) in addresses"
          :key="index"
          class="address-item"
        >
          <p><strong>Address Name</strong>: {{ address.name }}</p>
          <p>
            <strong>Recipient Name</strong>: {{ address.firstName }}
            {{ address.lastName }}
          </p>
          <p><strong>Recipient Phone</strong>: {{ address.phone }}</p>
          <p>
            <strong>Full Address</strong>: {{ address.zipCode }},
            {{ address.city }}, {{ address.district }}, {{ address.street }}
          </p>
          <button class="btn edit" @click="startEditing(index)">Edit</button>
          <button class="btn delete" @click="confirmDelete(index)">
            Delete
          </button>
        </div>
        <button class="btn add" @click="startAdding">Add New Address</button>
      </div>
    </div>

    <div v-else>
      <div class="edit-container">
        <h3>
          {{ currentIndex === null ? "Add New Address" : "Edit Address" }}
        </h3>
        <div class="form-group">
          <label for="name">Address Name:</label>
          <input
            type="text"
            v-model="currentAddress.name"
            placeholder="Enter address name"
            class="input-box"
          />
        </div>
        <div class="form-group">
          <label for="first-name">First Name:</label>
          <input
            type="text"
            id="first-name"
            v-model="currentAddress.firstName"
            placeholder="Enter first name"
            class="input-box"
          />
        </div>
        <div class="form-group">
          <label for="last-name">Last Name:</label>
          <input
            type="text"
            id="last-name"
            v-model="currentAddress.lastName"
            placeholder="Enter last name"
            class="input-box"
          />
        </div>
        <div class="form-group">
          <label for="phone">Recipient Phone:</label>
          <input
            type="tel"
            id="phone"
            v-model="currentAddress.phone"
            placeholder="Enter recipient phone"
            class="input-box"
          />
        </div>
        <div class="form-group">
          <label for="zip-code">Zip Code:</label>
          <input
            type="text"
            id="zip-code"
            v-model="currentAddress.zipCode"
            placeholder="Enter zip code"
            class="input-box"
          />
        </div>
        <div class="form-group">
          <label for="city">City:</label>
          <input
            type="text"
            id="city"
            v-model="currentAddress.city"
            placeholder="Enter city"
            class="input-box"
          />
        </div>
        <div class="form-group">
          <label for="district">District:</label>
          <input
            type="text"
            id="district"
            v-model="currentAddress.district"
            placeholder="Enter district"
            class="input-box"
          />
        </div>
        <div class="form-group">
          <label for="street">Street Address:</label>
          <input
            type="text"
            id="street"
            v-model="currentAddress.street"
            placeholder="Enter street address"
            class="input-box"
          />
        </div>
        <div class="actions">
          <button class="btn save" @click="saveEdit">Save</button>
          <button class="btn cancel" @click="cancelEdit">Cancel</button>
        </div>
      </div>
    </div>

    <!-- Confirmation Modal -->
    <div v-if="showDeleteModal" class="modal-overlay">
      <div class="modal">
        <p>Are you sure you want to delete this address?</p>
        <div class="actions">
          <button class="btn confirm" @click="deleteAddress">Confirm</button>
          <button class="btn confirm" @click="closeModal">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from "vue";
import axios from "axios";

onMounted(() => {
  fetchAddresses();
});

interface Address {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  phone: string;
  zipCode: string;
  city: string;
  district: string;
  street: string;
}

const addresses = reactive<Address[]>([]);
const showDeleteModal = ref(false);
const addressToDelete = ref<number | null>(null);
const isEditing = ref(false);
const currentAddress = reactive<Omit<Address, "id">>({
  name: "",
  firstName: "",
  lastName: "",
  phone: "",
  zipCode: "",
  city: "",
  district: "",
  street: "",
});
const currentIndex = ref<number | null>(null);

const fetchAddresses = async () => {
  try {
    const response = await axios.get("/api/shipping-addresses");
    addresses.splice(0, addresses.length, ...response.data);
  } catch (error) {
    console.error("Failed to fetch shipping addresses:", error);
  }
};

const startAdding = () => {
  isEditing.value = true;
  currentIndex.value = null;
  Object.assign(currentAddress, {
    name: "",
    firstName: "",
    lastName: "",
    phone: "",
    zipCode: "",
    city: "",
    district: "",
    street: "",
  });
};

const startEditing = (index: number) => {
  isEditing.value = true;
  currentIndex.value = index;
  Object.assign(currentAddress, addresses[index]);
};

const saveEdit = async () => {
  if (currentIndex.value === null) {
    // Add new address
    try {
      await axios.post("/api/shipping-addresses", currentAddress);
      await fetchAddresses();
    } catch (error) {
      console.error("Failed to add address:", error);
    }
  } else {
    // Update existing address
    try {
      await axios.put(
        `/api/shipping-addresses/${addresses[currentIndex.value].id}`,
        currentAddress
      );
      await fetchAddresses();
    } catch (error) {
      console.error("Failed to update address:", error);
    }
  }
  cancelEdit();
};

const cancelEdit = () => {
  isEditing.value = false;
  currentIndex.value = null;
  Object.assign(currentAddress, {
    name: "",
    firstName: "",
    lastName: "",
    phone: "",
    zipCode: "",
    city: "",
    district: "",
    street: "",
  });
};

const confirmDelete = (index: number) => {
  addressToDelete.value = index;
  showDeleteModal.value = true;
};

const deleteAddress = async () => {
  if (addressToDelete.value !== null) {
    try {
      await axios.delete(
        `/api/shipping-addresses/${addresses[addressToDelete.value].id}`
      );
      await fetchAddresses();
    } catch (error) {
      console.error("Failed to delete address:", error);
    }
  }
  closeModal();
};

const closeModal = () => {
  showDeleteModal.value = false;
  addressToDelete.value = null;
};
</script>

<style scoped>
.shipping-address {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.address-item {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #f9f9f9;
}

.edit-container {
  margin-top: 20px;
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 6px;
}

.form-group label {
  display: block;
  font-weight: bold;
  text-align: left;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.actions {
  margin-top: 20px;
}

.input-box {
  display: block;
  width: calc(100% - 2rem);
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
  border-radius: 7px;
  color: #333;
  font-size: 1rem;
}

.input-box:focus {
  outline: none;
  border-color: #007bff;
  background-color: #fff;
}

.btn {
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  background-color: #000;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  margin-left: 5px;
  transition: transform 0.1s;
}

.btn:hover {
  background-color: #747474;
}

.btn:active {
  transform: scale(0.95);
}

.btn.add {
  display: block;
  width: 100%;
  margin-top: 20px;
  background-color: #007bff;
}

.btn.edit {
  background-color: #ffc107;
}

.btn.delete {
  background-color: #dc3545;
}

.btn.confirm {
  background-color: #747474;
}

.btn.cancel {
  background-color: #747474;
}

.btn.save:hover,
.btn.cancel:hover {
  background-color: #747474;
}
</style>
