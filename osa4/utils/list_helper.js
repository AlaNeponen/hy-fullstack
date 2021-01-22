const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    let total = 0
    blogs.forEach(blogi=> {
        total += blogi.likes  
    });
    return total
}

const favoriteBlog = (blogs) => {
    let favorite = {
        likes: -1
    }
    blogs.forEach(blogi => {
        if (blogi.likes > favorite.likes) {
            favorite = blogi
        }
    })
    return favorite
}

module.exports = {
    dummy, totalLikes, favoriteBlog
}