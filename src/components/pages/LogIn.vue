<script setup></script>

<template>
  <div class="login-main-container">
    <div class="left-container">
      <div class="info">
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
          <router-link class="small-text link" to="/signup">Regístrate</router-link>
        </div>

        <form class="log-in-form">
          <InputText id="email" v-model="value" placeholder="Correo electrónico" />
          <InputText id="password" v-model="value" placeholder="Contraseña" />
          <Button label="Iniciar sesión" rounded />
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
  color: white;
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

InputText {
  width: 100%;
  font-size: 0.9rem;
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
