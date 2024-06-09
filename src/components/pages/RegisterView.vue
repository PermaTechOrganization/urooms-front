<script setup>
import { ref } from 'vue'
import AccountForm from '../forms/AccountForm.vue'
import StudentForm from '../forms/StudentForm.vue'
import LessorForm from '../forms/LessorForm.vue'

const active = ref(0)
const formData = ref(null)
const showAccountForm = ref(true)
const accountData = ref(null)

const items = ref([
  {
    label: 'Estudiante',
    command: () => setActiveTab(0)
  },
  {
    label: 'Arrendador',
    command: () => setActiveTab(1)
  }
])

function setActiveTab(tabIndex) {
  if (tabIndex !== active.value) {
    active.value = tabIndex
    showAccountForm.value = true
  }
}

function handleAccountSubmit(submittedData) {
  //console.log('Datos del formulario:', submittedData.data)
  //formData.value = submittedData.data
  accountData.value = submittedData;
  showAccountForm.value = false
}

</script>

<template>
  <div class="register-container">
    <div class="card">
      <h1 class="title bottom-space">Registro</h1>

      <TabMenu v-if="showAccountForm" :model="items" class="tab-menu"></TabMenu>

      <div class="student-container" v-if="active === 0">
        <AccountForm v-if="showAccountForm" @submit="handleAccountSubmit" />
        <StudentForm v-if="!showAccountForm && accountData" :account="accountData" />
      </div>

      <div class="lessor-container" v-if="active === 1">
        <AccountForm v-if="showAccountForm" @submit="handleAccountSubmit" />
        <LessorForm v-if="!showAccountForm && accountData" :account="accountData" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 1.6rem;
  font-weight: 600;
  color: #846cd9;
  padding: 0;
  margin: 0;
  line-height: 30px;
}

.bottom-space {
  margin-bottom: 20px;
  margin-top: 10px;
}

.register-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background-color: #846cd9;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 20px;
  margin: auto;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: auto;
  width: 60%;
  max-width: 400px;
}

.tab-menu {
  max-width: 100%;
  align-self: center;
}

.student-container,
.lessor-container {
  width: 100%;
  padding: 10px;
}

@media screen and (max-width: 1000px) {
  .card {
    width: 80%;
    height: auto;
    margin: 20px;
  }
}

@media screen and (max-width: 768px) {
  .card {
    width: 80%;
    height: auto;
    margin: 20px;
  }
}

@media screen and (max-width: 600px) {
  .card {
    width: 85%;
    height: auto;
    margin: 20px;
  }
}
</style>
