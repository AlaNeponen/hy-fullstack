const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')

const initialBlogs = [
    {
        title: 'eka',
        author: 'meikä',
        url: 'notarealurl.org',
        likes: 4
      },

      {
          title: 'toka',
          author: 'joku muu',
          url: 'stillnotreal.fi',
          likes: 1
      },

      {
          title: 'kolmas',
          author: 'sama äijä',
          url: 'eivielakaanoikeaurl.com',
          likes: 5
      }
]

beforeEach(async () => {
    await Blog.deleteMany({})
    const blogObjects = initialBlogs.map(blog => new Blog(blog))
    const promiseArray = blogObjects.map(blog => blog.save())
    await Promise.all(promiseArray)
})

test('blogs are returned in JSON', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
})

test('all blogs are returned', async () => {
    const res = await api.get('/api/blogs')
    expect(res.body).toHaveLength(initialBlogs.length)
})

afterAll(() => {
    mongoose.connection.close()
})