<script>
import { AuthApiService} from "@/services/AuthApiService.js";
export default {
  name: 'AccountForm',
  props: {
    onSubmit: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      id: '11',
      username: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    }
  },
  methods: {
    async register() {
      try {
        const authApiService = new AuthApiService();
        const response = await authApiService.register({
          id: this.id,
          username: this.username,
          email: this.email,
          firstName: this.firstName,
          lastName: this.lastName,
        });
        console.log('Usuario registrado con éxito:', response.data);
        this.onSubmit(response.data);
      } catch (error) {
        console.error('Error al registrar el usuario:', error);
        alert('Ocurrió un error al registrar el usuario. Por favor, inténtelo nuevamente.');
      }
    },
  },

};

</script>




<template>
  <form @submit.prevent="register" class="account-form">
    <FloatLabel>
      <InputText id="username" v-model="username" placeholder="Nombre de usuario" required/>
      <label for="usernameLabel">Nombre de usuario</label>
    </FloatLabel>
    <FloatLabel>
      <InputText id="email" v-model="email" placeholder="Correo electrónico" required/>
      <label for="emailLabel">Correo electrónico</label>
    </FloatLabel>
    <FloatLabel>
      <Password id="password" v-model="password" placeholder="Contraseña" toggleMask required :inputStyle="{'width':'100%'}" />
      <label for="passwordLabel">Contraseña</label>
    </FloatLabel>
    <Button label="Continuar" type="submit"/>
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

.account-form input{
  width: 100%;
  font-size: 0.9rem;
}

.account-form .p-password {
  width: 100%;
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
