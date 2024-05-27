<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  userRole: String
})

console.log('Rol del usuario:', props.userRole)
</script>

<template>
  <form class="lessor-form">
    <InputText id="firstName" v-model="value" placeholder="Nombre de usuario" />
    <InputText id="lastName" v-model="value" placeholder="Correo electrónico" />
    <InputText id="gender" v-model="value" placeholder="Contraseña" />
    <InputText id="dni" v-model="value" placeholder="Nombre de usuario" />
    <InputText id="phone" v-model="value" placeholder="Correo electrónico" />
    <InputText id="photoUrl" v-model="value" placeholder="Contraseña" />
    <Button label="Registrar" rounded />
  </form>
</template>

<style scoped>
.lessor-form {
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

  .lessor-form {
    margin-bottom: 0px;
    margin-top: 10px;
  }
}

@media screen and (max-width: 768px) {
  Button {
    margin: 0;
    margin-top: 10px;
  }

  .lessor-form {
    margin-bottom: 0px;
    margin-top: 10px;
  }
}

@media screen and (max-width: 600px) {
  Button {
    margin: 0;
    margin-top: 10px;
  }

  .lessor-form {
    margin-bottom: 0px;
    margin-top: 10px;
  }
}
</style>
