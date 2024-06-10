<template>
  <div class="profile-form">
    <div class="form-group">
      <label for="firstName">Nombre</label>
      <input type="text" id="firstName" v-model="editableLessor.firstName" />
    </div>
    <div class="form-group">
      <label for="lastName">Apellido</label>
      <input type="text" id="lastName" v-model="editableLessor.lastName" />
    </div>
    <div class="form-group">
      <label for="dni">DNI</label>
      <input type="text" id="dni" v-model="editableLessor.dni" />
    </div>
    <div class="form-group">
      <label for="phone">Teléfono</label>
      <input type="text" id="phone" v-model="editableLessor.phone" />
    </div>
    <div class="button-group">
      <button class="save-button" @click="saveChanges">Guardar Cambios</button>
      <button class="cancel-button" @click="$emit('cancel')">Cancelar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  lessor: Object
})

const emit = defineEmits(['saveChanges', 'cancel'])

const editableLessor = ref({ ...props.lessor })

const saveChanges = () => {
  emit('saveChanges', editableLessor.value)
}

watch(() => props.lessor, (newLessor) => {
  editableLessor.value = { ...newLessor }
})
</script>

<style scoped>
.profile-form {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  color: rgb(85, 85, 85);
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

.save-button,
.cancel-button {
  background-color: #846cd9;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
}

.save-button:hover,
.cancel-button:hover {
  background-color: #0056b3;
}
</style>
