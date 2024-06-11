<script>
export default {
  name: 'NavBarLessorMobile'
}
</script>

<template>
  <div class="mobile-navbar-container">
    <router-link to="/home/publications" class="mobile-navbar-item">
      <i class="pi pi-home" style="font-size: 1rem"></i>
      <span>Publicaciones</span>
    </router-link>
    <router-link to="/home/reservations" class="mobile-navbar-item">
      <i class="pi pi-calendar"></i>
      <span>Reservas</span>
    </router-link>
    <router-link to="/register" class="mobile-navbar-item">
      <i class="pi pi-bell" style="font-size: 1rem"></i>
      <span>Solicitudes</span>
    </router-link>
    <router-link to="/home/profile" class="mobile-navbar-item">
      <i class="pi pi-user"></i>
      <span> Perfil </span>
    </router-link>
  </div>
</template>

<style scoped>
.mobile-navbar-container {
  display: none;
}

@media screen and (max-width: 780px) {
  .mobile-navbar-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: sticky;
    bottom: 0;
    width: 100%;
    height: 60px;
    background-color: white;
    border-top: 1px solid #f0f0f0;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    font-size: small;
  }

  .mobile-navbar-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #929292;
    padding: 10px 0;
  }

  .mobile-navbar-item:hover {
    color: rgb(85, 85, 85);
  }

  .mobile-navbar-item .pi {
    font-size: 1rem;
  }

  .mobile-navbar-item.router-link-active {
    color: black;
  }

  .mobile-navbar-item.router-link-active .pi {
    color: black;
  }
}
</style>
