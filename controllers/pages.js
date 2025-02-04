const home = (req, res) => {
    res.render('index.ejs' , {title: 'Skyrockit'})
}

module.exports = {
    home,
}