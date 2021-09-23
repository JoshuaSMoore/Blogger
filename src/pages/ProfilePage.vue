<template>
  <div class="container-fluid">
    <div class="row" v-if="blogs.length > 0">
      <BlogsCard v-for="b in blogs" :key="b.id" :blogs="b" />
    </div>
    <div class="row" v-else>
      <h3>No Blogs...</h3>
    </div>
  </div>
</template>

<script>
import { computed, watchEffect } from '@vue/runtime-core'
import { blogsService } from '../services/BlogsService.js'
import Pop from '../utils/Pop.js'
import { AppState } from '../AppState.js'
import { useRoute } from 'vue-router'
import { profilesService } from '../services/ProfilesService.js'
export default {
  setup() {
    const route = useRoute()
    async function getBlogs() {
      try {
        await blogsService.getBlogs({ creatorId: route.params.id })
      } catch (error) {
        Pop.toast(error, 'error')
      }
    }
    watchEffect(async() => {
      if (route.params.id) {
        await profilesService.getProfileById(route.params.id)
        getBlogs()
      }
    })
    return {
      profile: computed(() => AppState.profile),
      blogs: computed(() => AppState.blogs)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
