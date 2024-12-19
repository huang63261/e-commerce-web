<template>
  <div class="cart-confirmation">
    <!-- Cart Section -->
    <h2 class="section-title">Cart Confirmation</h2>
    <div class="cart">
      <!-- Cart Items -->
      <div class="cart-items">
        <div class="cart-item" v-for="item in cartItems" :key="item.id">
          <img :src="item.image" :alt="item.name" class="item-image" />
          <h3>{{ item.name }}</h3>
          <div class="item-details">
            <p>Color: {{ item.color }}</p>
            <p>Size: {{ item.size }}</p>
            <p>Price: ${{ item.price.toFixed(2) }}</p>
          </div>
          <div class="item-quantity">
            <input type="number" v-model.number="item.quantity" min="1" />
          </div>
          <div class="item-total">
            <p>${{ (item.price * item.quantity).toFixed(2) }}</p>
          </div>
          <button @click="removeItem(item.id)" class="btn remove">
            Remove
          </button>
        </div>
      </div>

      <!-- Price Summary -->
      <div class="price-summary">
        <div class="price-counting">
          <p>
            <span>Subtotal:</span>
            <span>${{ priceSummary.subtotal.toFixed(2) }}</span>
          </p>
          <p>
            <span>Shipping:</span>
            <span>${{ priceSummary.shipping.toFixed(2) }}</span>
          </p>
          <p>
            <span>Discount:</span>
            <span>-${{ priceSummary.discount.toFixed(2) }}</span>
          </p>
        </div>
        <div class="price-total">
          <p>
            <span>Total:</span>
            <span>${{ priceSummary.total.toFixed(2) }}</span>
          </p>
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="actions">
      <button class="btn secondary" @click="continueShopping">
        Continue Shopping
      </button>
      <button class="btn primary" @click="checkOut">Check Out</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

// Mock Data for Cart Items
const cartItems = ref([
  {
    id: 1,
    name: "Leather Jacket",
    color: "Black",
    size: "L",
    price: 160.0,
    quantity: 1,
    image: "/img/leather_jacket.jpeg",
  },
  {
    id: 2,
    name: "Leather Handbag",
    color: "Brown",
    size: "F",
    price: 160.0,
    quantity: 1,
    image: "/img/handbag.jpeg",
  },
]);

// Mock Data for Price Summary
const priceSummary = ref({
  subtotal: 200.0,
  shipping: 10.0,
  discount: 15.0,
  total: 195.0,
});

// Methods
const removeItem = (id: number) => {
  cartItems.value = cartItems.value.filter((item) => item.id !== id);
  calculateSummary();
};

const calculateSummary = () => {
  const subtotal = cartItems.value.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  priceSummary.value.subtotal = subtotal;
  priceSummary.value.total =
    subtotal + priceSummary.value.shipping - priceSummary.value.discount;
};

const continueShopping = () => {
  console.log("Continue Shopping");
};

const checkOut = () => {
  console.log("Proceed to Check Out");
};
</script>

<style scoped>
.section-title {
  margin-bottom: 20px;
  text-align: start;
}

.cart-confirmation {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.progress-steps {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.cart {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.cart-items {
  display: flex;
  flex: 3;
  margin-right: 20px;
  flex-direction: column;
}

.cart-item {
  height: 30%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #e5e7eb;
  color: #000;
}

.item-image {
  width: 100px;
  height: 100px;
  margin-right: 10px;
  border-radius: 6px;
}

.item-details {
  flex: 2;
}

.item-quantity {
  flex: 1;
}

.item-quantity input {
  width: 50px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #fff;
  color: #000;
}

.item-total {
  flex: 1;
  text-align: right;
}

.price-summary {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 12px 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #e8e8e8;
  color: #000;
}

.price-summary p {
  display: flex;
  justify-content: space-between;
}

.price-counting {
  margin-bottom: 10px;
}

.price-total {
  font-size: 1.2em;
  font-weight: bold;
}

.actions {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  gap: 10px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.btn:hover {
  opacity: 0.8;
}

.btn:active {
  transform: scale(0.98);
}

.btn:focus {
  outline: none;
}

.btn.primary {
  background-color: #000;
  color: #fff;
}

.btn.secondary {
  background-color: #ccc;
  color: #000;
}

.recommended {
  margin-top: 40px;
}

.recommended-items {
  display: flex;
  justify-content: space-between;
}

.recommended-item {
  flex: 1;
  margin-right: 10px;
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
