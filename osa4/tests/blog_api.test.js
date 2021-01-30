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

test('returned blogs are defined by id, not _id', async () => {
    const res = await api.get('/api/blogs')
    expect(res.body[0].id).toBeDefined()
})

test('a new blog can be added', async () => {
    const newBlog = {
        title: 'uusi',
        author: 'testi',
        url: 'jotaintaastahan.me',
        likes: 20
    }
    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(200)
      .expect('Content-Type', /application\/json/)
    
      const res = await api.get('/api/blogs')
      const titles = res.body.map(b => b.title)
      expect(res.body).toHaveLength(initialBlogs.length + 1)
      expect(titles).toContain('uusi')
})

test('blog can be deleted', async () => {
    const blogs = await api.get('/api/blogs')
    const blogToBeDeleted = blogs.body[0]
    await api
      .delete(`/api/blogs/${blogToBeDeleted.id}`)
      .expect(204)

    const remainingBlogs = await api.get('/api/blogs')
    expect(remainingBlogs.body.length).toBe(blogs.body.length - 1)
    const titles = remainingBlogs.body.map(b => b.title)
    expect(titles).not.toContain(blogToBeDeleted.title)
    
})

afterAll(() => {
    mongoose.connection.close()
})