const User = require('../models/user')

const newApplication = (req, res) => {
    res.render('applications/new.ejs', { title: 'Add a New Application' })
}

const createApplication = async (req, res) => {
    const currentUser = await User.findById(req.params.userId)
       currentUser.applications.push(req.body) // pushing the formData into the user model
       await currentUser.save() // save our edits
       res.redirect(`/users/${currentUser._id}/applications`)
}

const index = (req, res) => {
    res.render('applications/index.ejs', {
        title: 'Your Applications'
    })
}

module.exports = {
    newApplication,
    createApplication,
    index,
}