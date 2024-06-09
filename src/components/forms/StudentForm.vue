<script>
import {AuthApiService} from "@/services/AuthApiService.js";
import {CareerApiService} from "@/services/CareerApiService.js";
import {UniversityApiService} from "@/services/UniversityApiService.js";
import {StudentApiService} from "@/services/StudentApiService.js";

export default {
  name: 'StudentForm',
  props: {
    account: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      id: 0,
      gender: "",
      dni: "",
      phone: "",
      photoUrl: "",
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
      firstName: "",
      lastName: "",
      careers: [],
      selectedCareerId: null,
      universities: [],
      selectedUniversityId: null,
      genders: [
        { label: 'Masculino', value: 'Masculino' },
        { label: 'Femenino', value: 'Femenino' },
        { label: 'Otro', value: 'Otro' }
      ],
      studentCount: 0
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

      try {
        const careerApiService = new CareerApiService();
        const universityApiService = new UniversityApiService();
        const studentApiService = new StudentApiService();

        this.studentCount = await studentApiService.countStudents();
        const careerResponse = await careerApiService.getCareerById(this.selectedCareerId);
        const universityResponse = await universityApiService.getUniversityById(this.selectedUniversityId);


        const studentData = {
          id: this.studentCount + 1,
          gender: this.gender,
          dni: this.dni,
          phone: this.phone,
          photoUrl: this.photoUrl,
          account: {
            id: this.account.id,
            username: this.account.username,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.account.email
          },
          career: {
            id: this.selectedCareerId,
            name: careerResponse.data.name,
            description: careerResponse.data.description
          },
          university: {
            id: this.selectedUniversityId,
            name: universityResponse.data.name,
            description: universityResponse.data.description
          }
        };
        const response = await studentApiService.addStudent(studentData);
        this.changeName(this.account.id);
        alert("Tu usuario fue registrado correctamente");
        this.$router.push("/login");
        console.log('Estudiante registrado con éxito:', response.data);
      } catch (error) {
        console.error('Error al registrar el estudiante:', error);
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
    <form class="student-form">
      <FloatLabel>
        <InputText id="firstName" v-model="firstName" placeholder="Nombre" required/>
        <label for="emailLabel">Nombre</label>
      </FloatLabel>
      <FloatLabel>
        <InputText id="lastName" v-model="lastName" placeholder="Apellido" required/>
        <label for="emailLabel">Apellido</label>
      </FloatLabel>
      <FloatLabel>
       <Dropdown id="gender" v-model="gender" placeholder="Género" :inputStyle="{'width':'100%'}" required
       :options="genders" optionLabel="label" optionValue="value"/>
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
      <Button label="Registrar" rounded @click="registerStudent" />
    </form>
  </div>
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
