<script>
import {AuthApiService} from "@/services/AuthApiService.js";
import {CareerApiService} from "@/services/CareerApiService.js";
import {UniversityApiService} from "@/services/UniversityApiService.js";
import {StudentApiService} from "@/services/StudentApiService.js";

export default {
  name: 'StudentForm',
  props: {
    userRole: String
  },
  data() {
    return {
      id: 0,
      gender: "",
      dni: "",
      phone: "",
      photoUrl: "",
      account: {
        id: "0",
        username: "",
        firstName: "",
        lastName: "",
        email: ""
      },
      career: {
        id: 0,
        name: "",
        description: ""
      },
      university: {
        id: 0,
        name: "",
        description: ""
      },
      careers: [],
      selectedCareerId: null,
      universities: [],
      selectedUniversityId: null
    }
  },
  created() {
    this.getCareers();
    this.getUniversities();
  },
  methods: {
    async getCareers(){
      try {
        const careerApiService = new CareerApiService();
        const response = await careerApiService.getall();
        this.careers = response.data.map(career => ({ careerName: career.name, careerId: career.id }));
      } catch (error) {
        console.error('Error al obtener las carreras:', error);
      }
    },
    async getUniversities(){
      try {
        const universityApiService = new UniversityApiService();
        const response = await universityApiService.getall();
        this.universities = response.data.map(university => ({ universityName: university.name, universityId: university.id }));
      } catch (error) {
        console.error('Error al obtener las universidades:', error);
      }
    },
    async registerStudent() {
      console.log('Registrar nuevo estudiante');
    }
  }
}
</script>

<template>
  <form class="student-form">
    <FloatLabel>
      <InputText id="firstName" v-model="account.firstName" placeholder="Nombre" required/>
      <label for="emailLabel">Nombre</label>
    </FloatLabel>
    <FloatLabel>
      <InputText id="lastName" v-model="account.lastName" placeholder="Apellido" required/>
      <label for="emailLabel">Apellido</label>
    </FloatLabel>
    <FloatLabel>
     <InputText id="gender" v-model="gender" placeholder="Género" required/>
      <label for="emailLabel">Género</label>
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
      <label for="emailLabel">URL Foto</label>
    </FloatLabel>
    <FloatLabel>
      <Dropdown v-model="selectedCareerId" :options="careers" placeholder="Seleccione una carrera" :inputStyle="{'width':'100%'}"
                optionLabel="careerName" optionValue="careerId" @change="career.id = selectedCareerId"/>
      <label for="career">Carrera</label>
    </FloatLabel>
    <FloatLabel>
      <Dropdown v-model="selectedUniversityId" :options="universities" placeholder="Seleccione una universidad" :inputStyle="{'width':'100%'}"
                optionLabel="universityName" optionValue="universityId" @change="university.id = selectedUniversityId"/>
      <label for="university">Universidad</label>
    </FloatLabel>
    <Button label="Registrar" rounded />
  </form>
</template>

<style scoped>
.student-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  margin: 20px 0 0 0;
}

.student-form input {
  width: 100%;
  font-size: 0.9rem;
}

.student-form .p-dropdown {
  width: 100%;
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

  .student-form {
    margin-bottom: 0px;
    margin-top: 10px;
  }
}

@media screen and (max-width: 768px) {
  Button {
    margin: 0;
    margin-top: 10px;
  }

  .student-form {
    margin-bottom: 0px;
    margin-top: 10px;
  }
}

@media screen and (max-width: 600px) {
  Button {
    margin: 0;
    margin-top: 10px;
  }

  .student-form {
    margin-bottom: 0px;
    margin-top: 10px;
  }
}
</style>
