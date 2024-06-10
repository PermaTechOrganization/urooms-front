<script setup>
import { ref, defineEmits } from 'vue'

const emits = defineEmits(['submit'])

const formData = ref({
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: ''
})

function handleSubmit() {
  console.log('Datos del formulario:', formData.value)
  console.log('Se hizo clic en el botón Continuar:', true)
  emits('submit', { data: formData.value, clicked: true })
}
</script>

<template>
  <form class="account-form" @submit.prevent="handleSubmit">
    <InputText id="firstName" v-model="value" placeholder="Nombre" />
    <InputText id="lastName" v-model="value" placeholder="Apellido" />
    <InputText id="username" v-model="value" placeholder="Nombre de usuario" />
    <InputText id="email" v-model="value" placeholder="Correo electrónico" />
    <InputText id="password" v-model="value" placeholder="Contraseña" />
    <Button label="Continuar" @click="handleSubmit" />
  </form>
  <div class="login-option">
    <router-link class="small-text link" to="/login">Ya tengo una cuenta</router-link>
  </div>
</template>

<style scoped>
.account-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  margin: 20px 0 0 0;
}

InputText {
  width: 100%;
  font-size: 0.9rem;
}

Button {
  width: auto;
  margin: 10px auto;
  font-size: 0.9rem;
}

.login-option {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.small-text {
  font-size: 0.8rem;
}

.link {
  color: #846cd9;
  text-decoration: underline;
}

.link:hover {
  cursor: pointer;
  color: #5f4bb6;
}

@media screen and (max-width: 1000px) {
  Button {
    margin: 0;
    margin-top: 10px;
  }

  .account-form {
    margin-bottom: 0px;
    margin-top: 10px;
  }
}

@media screen and (max-width: 768px) {
  Button {
    margin: 0;
    margin-top: 10px;
  }

  .account-form {
    margin-bottom: 0px;
    margin-top: 10px;
  }
}

@media screen and (max-width: 600px) {
  Button {
    margin: 0;
    margin-top: 10px;
  }

  .account-form {
    margin-bottom: 0px;
    margin-top: 10px;
  }
}
</style>
