<script setup>
import { ref } from 'vue'
import ProfileCard from '../elements/ProfileCard.vue'
import ProfileForm from '../forms/ProfileForm.vue'

const isEditing = ref(false)
const lessor = ref({
  firstName: 'Juan',
  lastName: 'Pérez',
  dni: '12345678',
  phone: '123-456-7890',
  profileImage: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png'
})

const startEditing = () => {
  isEditing.value = true
}

const saveChanges = (updatedLessor) => {
  lessor.value = { ...updatedLessor }
  isEditing.value = false
}

const cancelEditing = () => {
  isEditing.value = false
}
</script>

<template>
  <div>
    <div v-if="isEditing">
      <ProfileForm :lessor="lessor" @saveChanges="saveChanges" @cancel="cancelEditing" />
    </div>
    <div v-else>
      <ProfileCard :lessor="lessor" @edit="startEditing" />
    </div>
  </div>
</template>

<style scoped>

</style>
