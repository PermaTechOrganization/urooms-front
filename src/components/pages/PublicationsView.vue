<script setup>
import { ref, onMounted } from 'vue'
import { Publication, Lessor, TypeProperty } from '../model/Model'
import PublicationCard from '../elements/PublicationCard.vue'

const agregarPublicacion = () => {
  console.log('Agregar nueva publicación')
}

const publications = ref([])

onMounted(() => {
  const lessor1 = new Lessor(
    1,
    'Juan',
    'Pérez',
    '12345678',
    '123-456-7890',
    'https://cdn-icons-png.flaticon.com/512/6596/6596121.png'
  )

  const typeProperty1 = new TypeProperty(1, 'Apartamento', 'Descripción del tipo de propiedad.')

  const publication1 = new Publication(
    1,
    'Habitación en San Miguel',
    'Habitación para una persona en San Miguel. Incluye baño privado y acceso a la cocina. El precio incluye los servicios de agua, luz e internet.',
    'https://www.viacelere.com/wp-content/uploads/old-blog/2023/09/Como-decorar-una-habitacion-pequena_03.jpg',
    550.0,
    4.5,
    lessor1,
    typeProperty1
  )

  const publication2 = new Publication(
    2,
    'Habitación en San Isidro',
    'Habitación para una persona en San Isidro. Incluye baño privado y acceso a la cocina. El precio incluye los servicios de agua, luz e internet.',
    'https://www.viacelere.com/wp-content/uploads/old-blog/2023/09/Como-decorar-una-habitacion-pequena_03.jpg',
    800.0,
    3.5,
    lessor1,
    typeProperty1
  )

  const publication3 = new Publication(
    2,
    'Habitación en San Isidro',
    'Habitación para una persona en San Isidro. Incluye baño privado y acceso a la cocina. El precio incluye los servicios de agua, luz e internet.',
    'https://www.viacelere.com/wp-content/uploads/old-blog/2023/09/Como-decorar-una-habitacion-pequena_03.jpg',
    800.0,
    3.5,
    lessor1,
    typeProperty1
  )
  const publication4 = new Publication(
    2,
    'Habitación en San Isidro',
    'Habitación para una persona en San Isidro. Incluye baño privado y acceso a la cocina. El precio incluye los servicios de agua, luz e internet.',
    'https://www.viacelere.com/wp-content/uploads/old-blog/2023/09/Como-decorar-una-habitacion-pequena_03.jpg',
    800.0,
    3.5,
    lessor1,
    typeProperty1
  )
  publications.value = [publication1, publication2, publication3, publication4]
})
</script>

<template>
  <div class="publication-container">
    <div class="section-title">
      <p>Publicaciones</p>
      <button class="add-button" @click="agregarPublicacion">
        <i class="pi pi-plus"></i> Agregar Publicación
      </button>
    </div>
    <div class="publications">
      <PublicationCard
        v-for="publication in publications"
        :key="publication.id"
        :publication="publication"
      />
    </div>
  </div>
</template>

<style scoped>
.publication-container {
  display: flex;
  width: 100%;
  height: 100%;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.section-title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  color: rgb(85, 85, 85);
}

.section-title p {
  font-size: 1.5rem;
  font-weight: 500;
  padding-left: 20px;
}

.add-button {
  background-color: #846cd9;
  color: white;
  border: none;
  padding: 10px 15px;
  margin-right: 20px;
  font-size: 0.8rem;
  cursor: pointer;
  border-radius: 5px;
  align-items: center;
}

.add-button:hover {
  background-color: #0056b3;
}

.add-button i {
  margin-right: 5px;
  font-size: 0.8rem;
}

.publications {
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  padding: 0 20px 20px 20px;
}

@media screen and (max-width: 780px) {
  .publication-container {
    grid-template-columns: 1fr;
  }

  .section-title p {
    font-size: 1.2rem;
    padding: 0;
  }

  .add-button {
    padding: 10px;
    margin-right: 0;
  }
}
</style>
