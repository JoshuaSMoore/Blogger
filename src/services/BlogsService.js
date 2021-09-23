import { AppState } from '../AppState.js'
import { Blog } from '../models/Blog.js'
import { logger } from '../utils/Logger.js'
import { convertToQuery } from '../utils/Query.js'
import { api } from './AxiosService'
class BlogsService {
  async getBlogs(query = {}) {
    AppState.blogs = []
    logger.log('query', query)
    const res = await api.get('api/blogs' + convertToQuery(query))
    logger.log('blogs res', res)
    AppState.blogs = res.data.map(b => new Blog(b))
  }

  async createBlog(newBlog) {
    const res = await api.post('api/blogs', newBlog)
    AppState.blogs.unshift(new Blog(res.data))
    logger.log('create res', res)
  }

  async deleteBlog(blogId) {
    const res = await api.delete('api/blogs/' + blogId)
    logger.log('delete res', res)
    AppState.blogs = AppState.blogs.filter(b => b.id !== blogId)
  }
}

export const blogsService = new BlogsService()
