<script>
import { AuthApiService } from "@/services/AuthApiService.js";
import { LessorApiService } from "@/services/LessorApiService.js";

export default {
  name: 'LessorForm',
  props: {
    account: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      id: 0,
      dni: "",
      phone: "",
      photoUrl: "",
      firstName: "",
      lastName: "",
      lessorCount: 0
    }
  },
  methods: {
    async registerLessor() {
      try {
        const lessorApiService = new LessorApiService();
        this.lessorCount = await lessorApiService.countLessors();
        const lessorData = {
          id: this.lessorCount + 1,
          firstName: this.firstName,
          lastName: this.lastName,
          dni: this.dni,
          phone: this.phone,
          photoUrl: this.photoUrl,
          account: {
            Id: this.account.id,
            username: this.account.username,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.account.email
          }
        }
        const response = await lessorApiService.addLessor(lessorData);
        this.changeName(this.account.id);
        console.log('Arrendador registrado con éxito:', response.data);
        alert("Tu usuario fue registrado correctamente");
        this.$router.push("/login");

      } catch (error) {
        console.error('Error al registrar el arrendador:', error);
      }
    },
    async changeName(id){
      try {
        const authApiService = new AuthApiService();
        const response = await authApiService.updatebyId(id, {
          id: id,
          username: this.account.username,
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.account.email
        })
        console.log('Nombre cambiado con éxito:', response.data);
      } catch (error) {
        console.error('Error al cambiar el nombre:', error);
      }
    }
  }
}
</script>

<template>
  <div>
    <form class="lessor-form">
      <FloatLabel>
        <InputText id="firstName" v-model="firstName" placeholder="Nombre" required/>
        <label for="firstNameLabel">Nombre</label>
      </FloatLabel>
      <FloatLabel>
        <InputText id="lastName" v-model="lastName" placeholder="Apellido" required/>
        <label for="lastNameLabel">Apellido</label>
      </FloatLabel>
      <FloatLabel>
        <InputMask id="dni" v-model="dni" mask="99999999" placeholder="DNI" required/>
        <label for="emailLabel">DNI</label>
      </FloatLabel>
      <FloatLabel>
        <InputMask id="phone" v-model="phone" mask="999999999" placeholder="Celular" required/>
        <label for="emailLabel">Celular</label>
      </FloatLabel>
      <FloatLabel>
        <InputText id="photoUrl" v-model="photoUrl" placeholder="URL Foto" />
        <label for="photoUrlLabel">URL Foto</label>
      </FloatLabel>
      <Button label="Registrar" rounded @click="registerLessor" />
    </form>
  </div>
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
