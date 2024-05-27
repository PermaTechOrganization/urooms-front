<script setup>
import { ref, defineEmits } from 'vue'

const emits = defineEmits(['submit'])

const formData = ref({
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
    <InputText id="username" v-model="value" placeholder="Nombre de usuario" />
    <InputText id="email" v-model="value" placeholder="Correo electrónico" />
    <InputText id="password" v-model="value" placeholder="Contraseña" />
    <Button label="Continuar" @click="handleSubmit" />
  </form>
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
