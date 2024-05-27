<script setup>
import { ref } from 'vue'
import AccountForm from '../components/AccountForm.vue'
import StudentForm from '../components/StudentForm.vue'
import LessorForm from '../components/LessorForm.vue'

const active = ref(0)
const formData = ref(null)

const items = ref([
  {
    label: 'Estudiante',
    icon: 'pi pi-home',
    command: () => ((active.value = 0), (showAccountForm.value = true))
  },
  {
    label: 'Arrendador',
    icon: 'pi pi-chart-line',
    command: () => ((active.value = 1), (showAccountForm.value = true))
  }
])

const showAccountForm = ref(true)

function handleAccountSubmit(submittedData) {
  console.log('Datos del formulario:', submittedData.data)
  console.log('Se hizo clic en el botón Continuar:', submittedData.clicked)
  formData.value = submittedData.data
  showAccountForm.value = false
}
</script>

<template>
  <div class="register-container">
    <div class="card">
      <h1 class="title bottom-space">Registro</h1>

      <TabMenu :model="items" class="tab-menu"></TabMenu>

      <div class="student-container" v-if="active === 0">
        <div v-if="showAccountForm">
          <AccountForm @submit="handleAccountSubmit" />
        </div>
        <div v-else>
          <StudentForm :userRole="student" />
        </div>
      </div>

      <div class="lessor-container" v-if="active === 1">
        <div v-if="showAccountForm">
          <AccountForm @submit="handleAccountSubmit" />
        </div>
        <div v-else>
          <LessorForm :userRole="student" />
        </div>
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
  margin-bottom: 15px;
}

.register-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100%;
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
