<template>
  <div class="col-md-4 mb-5">
    <div class="card p-3" style="width: 24rem; height: 36rem;">
      <img :src="blog.imgUrl" class="card-img-top" alt="...">
      <div class="card-body" style="height: 64rem;  overflow-y: scroll;">
        <h5 class="card-title">
          {{ blog.title }}
        </h5>
        <p class="card-text">
          {{ blog.body }}
        </p>
        <div class="d-flex">
          <router-link :to="{name: 'Profile', params: {id: blog.creatorId}}" class="btn btn-primary">
            Blog Page
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState.js'
import { blogsService } from '../services/BlogsService.js'
export default {
  props: {
    blog: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
