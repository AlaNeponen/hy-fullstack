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

module.exports = {
    dummy, totalLikes
}