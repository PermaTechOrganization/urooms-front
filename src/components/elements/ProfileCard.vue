<template>
  <div class="profile-card">
    <img :src="lessor.profileImage" alt="Profile Image" class="profile-image" />
    <div class="profile-info">
      <p><strong>Nombre:</strong> {{ lessor.firstName }}</p>
      <p><strong>Apellido:</strong> {{ lessor.lastName }}</p>
      <p><strong>DNI:</strong> {{ lessor.dni }}</p>
      <p><strong>Teléfono:</strong> {{ lessor.phone }}</p>
    </div>
    <button class="edit-button" @click="$emit('edit')">Editar</button>
  </div>
</template>

<script setup>
const props = defineProps({
  lessor: Object
})
</script>

<style scoped>
.profile-card {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
}

.profile-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
}

.profile-info p {
  font-size: 1rem;
  margin: 5px 0;
}

.edit-button {
  background-color: #846cd9;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
}

.edit-button:hover {
  background-color: #0056b3;
}
</style>
