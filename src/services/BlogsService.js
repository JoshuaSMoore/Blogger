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
}

export const blogsService = new BlogsService()
