const listHelper = require('../utils/list_helper')


test('dummy returns one', () => {
    const blogs = []

    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
})

describe('total likes', () => {
  const listWithOne = [
    {
      title: 'eka',
      author: 'meikä',
      url: 'notarealurl.org',
      likes: 4
    }
  ]

  const listWithMultiple = [
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
  const empty = []

  test('empty list has 0 total likes', () => {
      const result = listHelper.totalLikes(empty)
      expect(result).toBe(0)
  })

  test('total likes of list with one blog equal that of the blog', () => {
      const result = listHelper.totalLikes(listWithOne)
      expect(result).toBe(4)
  })

  test('total likes are calculated properly for lists with multiple blogs', () => {
      const result = listHelper.totalLikes(listWithMultiple)
      expect(result).toBe(10)
  })

})

describe('favoriteBlog', () => {
  const blog1 =
  {
    title: 'eka',
    author: 'meikä',
    url: 'notarealurl.org',
    likes: 4
  }

  const blog3 = 
  {
    title: 'kolmas',
    author: 'sama äijä',
    url: 'eivielakaanoikeaurl.com',
    likes: 5
  }

  const listWithOne = [
    {
      title: 'eka',
      author: 'meikä',
      url: 'notarealurl.org',
      likes: 4
    }
  ]

  const listWithMultiple = [
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
  test('when list has only one blog, favoriteBlog will return that blog', () => {
      const result = listHelper.favoriteBlog(listWithOne)
      expect(result).toEqual(blog1)
  })
  test('favoriteBlog returns blog with most likes from a list with multiple blogs', () => {
      const result = listHelper.favoriteBlog(listWithMultiple)
      expect(result).toEqual(blog3)
  })
})