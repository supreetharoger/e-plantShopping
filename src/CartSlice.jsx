import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === name);
        if(existingItem) {
            existingItem.quantity++;
        }else {
            state.items.push({name, image, cost, quantity: 1});            
        }
    },
    removeItem: (state, action) => {
        const itemName = action.payload.name;
        state.items = state.items.filter(item => item.name !== itemName);
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload; // Destructure the product name and new quantity from the action payload
        // Find the item in the cart that matches the given name
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
            itemToUpdate.quantity = quantity; // If the item is found, update its quantity to the new value
        }
    
    },
    incrementQuantity: (state, action) => {
        const name = action.payload.name;
        const existingItem = state.items.find((item) => item.name === name);
        if (existingItem) {
          existingItem.quantity += 1;
        }
      },
      decrementQuantity: (state, action) => {
        const name = action.payload.name;
        const existingItem = state.items.find((item) => item.name === name);
        if (existingItem) {
          existingItem.quantity = Math.max(1, existingItem.quantity - 1);
        }
      },
  },
});

export const { addItem, removeItem, updateQuantity, incrementQuantity, decrementQuantity } = CartSlice.actions;

export default CartSlice.reducer;
