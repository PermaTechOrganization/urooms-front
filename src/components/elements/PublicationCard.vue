<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  publication: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div v-if="publication" class="card-container">
    <div class="card-image">
      <img :src="publication.imageURL" alt="publication" />
    </div>
    <div class="card-info">
      <p class="card-title">{{ publication.title }}</p>
      <p class="card-price">S/ {{ publication.price }} al mes</p>
      <p class="card-description">Descripción: {{ publication.description }}</p>
      <div class="card-rating">
        <i class="pi pi-star" v-for="i in Math.floor(publication.rating)" :key="i"></i>
      </div>
      <button class="card-button">Ver más</button>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 20px auto 20px auto;
  width: 90%;
  height: max-content;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card-container:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.card-image img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.card-title {
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
}

.card-info {
  text-align: center;
  text-align: justify;
}

.card-price {
  font-weight: bold;
  color: #846cd9;
}

.card-rating {
  display: flex;
  padding: 5px 0 5px 0;
}

.card-rating .pi-star {
  color: #846cd9;
  padding: 2px;
}

.card-button {
  background-color: #846cd9;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.card-button:hover {
  background-color: #6a4e9b;
  transition: all 0.3s ease;
}

@media screen and (max-width: 600px) {
  .card-container {
    width: 100%;
    padding: auto;
  }
}
</style>
