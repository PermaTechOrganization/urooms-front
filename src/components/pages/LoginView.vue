<script>
import { AuthApiService } from "@/services/AuthApiService.js";
import {StudentApiService} from "@/services/StudentApiService.js";
import {LessorApiService} from "@/services/LessorApiService.js";
export default{
  name: "LoginView",
  data() {
    return {
      AccountId: 0,
      StudentId: 0,
      LessorId: 0,
      Role: "",
      InputEmail: "",
      InputPassword: ""
    };
  },
  methods: {
    async Login() {
      try {
        const authApiService = new AuthApiService();
        const studentApiService = new StudentApiService();
        const lessorApiService = new LessorApiService();
        const response = await authApiService.findByEmail(this.InputEmail);
        console.log(response.data);
        if(response.data.length !== 0){
          if (this.InputPassword === "1234") {
            localStorage.setItem('authenticated', true);
            response.data.forEach((element) => {
              this.AccountId = element.id;
            });
            const responseStudent = await studentApiService.getStudentByAccountId(this.AccountId);
            const responseLessor = await lessorApiService.getLessorByAccountId(this.AccountId);

            if(responseStudent !== undefined && responseLessor === undefined){
              this.StudentId = responseStudent.id;
              this.$router.push("/home");
              this.Role = "Student"
              console.log(this.StudentId, this.Role);
            }
            else{
              this.LessorId = responseLessor.id;
              this.$router.push("/home/publications");
              this.Role = "Lessor"
              console.log(this.LessorId, this.Role);
            }

            console.log("Usuario encontrado con id:", this.AccountId);
          } else {
            alert("Contraseña incorrecta");
          }
        }
        else {
          alert("Correo incorrecto");
        }
      } catch (error) {
        console.error("Error al buscar el usuario:", error);
      }
    },
  },
};

</script>

<template>
  <div class="login-main-container">
    <div class="left-container">
      <div class="info">
        <img class="logo" src="/src/assets/urooms-logo.png" alt="urooms logo" />
        <h1 class="title">Los mejores alquileres</h1>
        <h2 class="subtitle">cerca de tu universidad</h2>
      </div>
      <div class="credits-left">
        <p class="credits-text">Permatech &copy; 2024</p>
      </div>
    </div>

    <div class="right-container">
      <div class="card">
        <h1 class="title bottom-space">Inicia Sesión</h1>

        <div class="register-option">
          <p class="small-text">¿No tienes una cuenta?</p>
          <router-link class="small-text link" to="/register">Regístrate</router-link>
        </div>

        <form @submit.prevent="Login" class="log-in-form">
          <FloatLabel>
            <InputText id="email" v-model="InputEmail" placeholder="Correo electrónico" required />
            <label for="emailLabel">Correo electrónico</label>
          </FloatLabel>
          <FloatLabel>
            <Password class="log-password" id="password" v-model="InputPassword" placeholder="Contraseña" :feedback="false"
                      :inputStyle="{'width':'100%'}" :panelStyle="{'top':'100%'}" toggleMask required/>
            <label for="passwordLabel">Contraseña</label>
          </FloatLabel>
          <Button type="submit" label="Iniciar sesión"/>
        </form>

        <div class="forgotten-password">
          <router-link class="small-text link" to="/signup">¿Olvidaste tu contraseña?</router-link>
        </div>
      </div>

      <div class="credits-right">
        <p class="credits-text white">Permatech &copy; 2024</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-main-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  display: true;
}

.title {
  font-size: 1.6rem;
  font-weight: 600;
  color: #846cd9;
  padding: 0;
  margin: 0;
  line-height: 30px;
}

.subtitle {
  font-size: 1rem;
  font-weight: 400;
}

.bottom-space {
  margin-bottom: 10px;
}

.left-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px;
  width: 40%;
  height: 100%;
}

.logo {
  width: 50%;
  height: auto;
  margin: 20px;
  align-self: center;
}

.info {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.credits-left {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
}

.credits-right {
  display: none;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
}

.credits-text {
  font-size: 0.8rem;
  color: gray;
}

.white {
  color: #fff;
}

.right-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  height: 100%;
  background-color: #846cd9;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 30px;
  margin: auto;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: auto;
  width: 60%;
  max-width: 400px;
}

.register-option {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  gap: 5px;
}

.log-in-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  margin: 20px 0;
}

.log-in-form input {
  width: 100%;
}

.log-in-form .p-password {
  width: 100%;
}




Button {
  width: auto;
  margin: 10px auto;
  font-size: 0.9rem;
}

.forgotten-password {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
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

.credits {
  width: 100%;
  bottom: 10px;
  align-items: center;
  text-align: center;
}

@media screen and (max-width: 1000px) {
  .login-main-container {
    flex-direction: row;
  }

  .left-container {
    width: auto;
  }

  .right-container {
    width: 70%;
  }

  .card {
    width: 80%;
  }
}

@media screen and (max-width: 768px) {
  .login-main-container {
    flex-direction: column;
  }

  .left-container {
    display: none;
  }

  .right-container {
    width: 100%;
  }

  .card {
    width: 80%;
  }

  .credits-right {
    display: flex;
  }
}

@media screen and (max-width: 600px) {
  .login-main-container {
    flex-direction: column;
  }

  .left-container {
    display: none;
  }

  .right-container {
    width: 100%;
  }

  .card {
    width: 85%;
  }

  .credits-right {
    display: flex;
  }
}
</style>
