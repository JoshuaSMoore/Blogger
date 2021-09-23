<template>
  <div class="home container-fluid">
    <div class="row">
      <BlogCard v-for="b in blogs" :key="b.id" :blog="b" />
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from '@vue/runtime-core'
import { blogsService } from '../services/BlogsService.js'
import Pop from '../utils/Pop.js'
import { AppState } from '../AppState.js'

export default {
  setup() {
    onMounted(async() => {
      try {
        await blogsService.getBlogs()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      blogs: computed(() => AppState.blogs)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
