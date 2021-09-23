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
export default {
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
