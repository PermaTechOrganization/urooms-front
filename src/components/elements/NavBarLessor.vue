<script>
import { LessorApiService } from "@/services/LessorApiService.js";
export default {
  name: 'NavBarLessor',
  data() {
    return {
      accountId: localStorage.getItem('accountId'),
      lessorId: localStorage.getItem('lessorId'),
      nameLessor: '',
      pictureLessor: ''
    };
  },
  created() {
    this.getLessorId();
  },
  methods: {
    async getLessorId() {
      const lessorApiService = new LessorApiService();
      const response = await lessorApiService.getLessorById(this.lessorId);
      this.nameLessor = response.data.account.firstName;
      this.pictureLessor = response.data.photoUrl;
    }
  }
}

</script>

<template>
  <div class="navbar-container">
    <div class="navbar-logo">
      <router-link to="/">
        <img class="logo" src="/src/assets/urooms-logo.png" alt="urooms logo" />
      </router-link>
    </div>
    <div class="navbar-links">
      <router-link to="/home/publications">Publicaciones</router-link>
      <router-link to="/home/reservations">Reservas</router-link>
      <router-link to="/register">Solicitudes</router-link>
    </div>
    <div class="welcome-user">
      <p>Hola, {{ nameLessor }}</p>
    </div>
    <div class="user-menu">
      <i class="pi pi-bars" style="font-size: 1rem"></i>
      <img class="user-avatar" src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" alt="user" />
    </div>
  </div>
</template>

<style scoped>
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  height: 60px;
  background-color: white;
  border-bottom: 1px solid #f0f0f0;
}

.navbar-logo {
  display: flex;
  align-items: center;
}

.logo {
  max-height: 20px;
  width: auto;
}

.navbar-links {
  display: flex;
  gap: 20px;
  transition: all 0.3s ease;
  margin-right: auto;
  margin-left: auto;
}

.navbar-links a {
  text-decoration: none;
  color: #929292;
  padding: 6px 14px;
  border-radius: 30px;
  transition: all 0.3s ease;
}

.navbar-links a:hover {
  color: rgb(85, 85, 85);
  background-color: #f0f0f0;
  transition: all 0.3s ease;
}

.navbar-links .router-link-exact-active {
  color: black !important;
  background-color: transparent !important;
  transition: all 0.3s ease;
}

.welcome-user {
  margin-right: 30px;
  margin-left: auto;
}

.user-menu {
  display: flex;
  gap: 10px;
  align-items: center;
  border: 1px solid #d4d4d4;
  padding: 4px 12px;
  border-radius: 40px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.user-menu:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.user-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

@media screen and (max-width: 780px) {
  .navbar-container {
    display: none;
  }
}
</style>
