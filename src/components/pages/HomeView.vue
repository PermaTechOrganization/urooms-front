<script>
import NavBarStudent from '../elements/NavBarStudent.vue'
import NavBarStudentMobile from '../elements/NavBarStudentMobile.vue'
import NavBarLessor from '../elements/NavBarLessor.vue'
import NavBarLessorMobile from '../elements/NavBarLessorMobile.vue'

export default {
  name: 'HomeView',
  components:{
    NavBarStudent,
    NavBarStudentMobile,
    NavBarLessor,
    NavBarLessorMobile
  },
  props: {
    userRole: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="home-container">
    <NavBarStudent v-if="userRole === 'Student'" />
    <NavBarLessor v-else />
    <router-view />
    <NavBarStudentMobile v-if="userRole === 'Student'" />
    <NavBarLessorMobile v-else />
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

.router-view-container {
  flex-grow: 1;
  width: 100%;
}

@media screen and (max-width: 1000px) {
}

@media screen and (max-width: 768px) {
}

@media screen and (max-width: 600px) {
}
</style>
