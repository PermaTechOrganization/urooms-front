<template>
  <div>
    <h2>Comentarios</h2>
    <div v-if="comments.length > 0" class="comments-list">
      <div class="comment-card" v-for="comment in comments" :key="comment.id">
        <div class="comment-header">
          <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="Profile Icon" class="comment-icon" />
          <strong class="comment-author">{{ comment.author }}</strong>
        </div>
        <p class="comment-text">{{ comment.text }}</p>
      </div>
    </div>
    <p v-else>No hay comentarios para esta publicación.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Comment } from '../../model/Model'

const route = useRoute()
const comments = ref([])

onMounted(() => {
  const publicationId = route.params.id
  comments.value = getCommentsForPublication(publicationId)
})

function getCommentsForPublication(publicationId) {
  const allComments = [
    { id: 1, publicationId: 1, text: 'Great place!', author: 'Mario' },
    { id: 2, publicationId: 1, text: 'Very clean and cozy.', author: 'Bob' },
    { id: 3, publicationId: 2, text: 'Good location.', author: 'Charlie' },
    { id: 4, publicationId: 1, text: 'Good neighbors', author: 'Rodrigo'}
  ]

  return allComments.filter(comment => comment.publicationId == publicationId)
}
</script>

<style scoped>
.comments-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  align-items: flex-start;
}

.comment-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 500px;
}

.comment-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.comment-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.comment-author {
  color:#846cd9;
  font-size: 1rem;
  font-weight: bold;
}

.comment-text {
  font-size: 0.9rem;
  color: #333;
}
</style>