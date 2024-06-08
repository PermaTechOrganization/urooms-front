<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  userRole: String
})

console.log('Rol del usuario:', props.userRole)
</script>

<template>
  <form class="lessor-form">
    <FloatLabel>
      <InputText id="firstName" v-model="value" placeholder="Nombre" required/>
      <label for="firstNameLabel">Nombre</label>
    </FloatLabel>
    <FloatLabel>
      <InputText id="lastName" v-model="value" placeholder="Apellido" required/>
      <label for="lastNameLabel">Apellido</label>
    </FloatLabel>
    <FloatLabel>
      <InputText id="gender" v-model="value" placeholder="Género" required/>
      <label for="genderLabel">Género</label>
    </FloatLabel>
    <FloatLabel>
      <InputText id="dni" v-model="value" placeholder="DNI" required/>
      <label for="dniLabel">DNI</label>
    </FloatLabel>
    <FloatLabel>
      <InputText id="phone" v-model="value" placeholder="Celular" required/>
      <label for="phoneLabel">Celular</label>
    </FloatLabel>
    <FloatLabel>
      <InputText id="photoUrl" v-model="value" placeholder="URL Foto" />
      <label for="photoUrlLabel">URL Foto</label>
    </FloatLabel>
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

.lessor-form input {
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
