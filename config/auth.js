const authCheck = (req, res, next) => {
    console.log(req.user)
    if(!req.body) {
        res.redirect('/index')
    } else {
        next()
    }
}

module.exports = authCheck