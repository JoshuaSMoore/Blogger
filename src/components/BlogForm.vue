<template>
  <form @submit.prevent="createBlog()">
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text"
             class="form-control bg-light"
             name="title"
             placeholder="Title"
             v-model="editable.title"
             required
      >
    </div>
    <div class="form-group">
      <label for="title">Img Url</label>
      <input type="text"
             class="form-control bg-light"
             name="imgUrl"
             placeholder="Img Url"
             v-model="editable.imgUrl"
             required
      >
    </div>
    <div class="form-group">
      <label for="title">Description</label>
      <input type="text"
             class="form-control bg-light"
             name="description"
             placeholder="description"
             v-model="editable.description"
             required
      >
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-success mt-2">
        Create Blog
      </button>
    </div>
  </form>
</template>

<script>
import { Modal } from 'bootstrap'
import { blogsService } from '../services/BlogsService.js'
import Pop from '../utils/Pop.js'
import { ref } from '@vue/reactivity'

export default {
  setup() {
    const editable = ref({})
    return {
      async createBlog() {
        try {
          await blogsService.createBlog(editable.value)
          editable.value = {}
          Pop.toast('You made it')
          const modal = Modal.getInstance(document.getElementById('blog-form'))
          modal.hide()
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
