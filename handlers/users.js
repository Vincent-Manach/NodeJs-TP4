module.exports = function(app) {

    app.get('/users', (req, res) => {
       res.send("All users")
    })

    app.get('/users/:id', (req, res) => {
        res.send(`User id ${req.params.id}`)
    })

    app.post('/users', (req, res) => {
        res.send("Create user")
    })
    
    app.post('/users/:id', (req, res) => {
        res.send(`Delete user id ${req.params.id}`)
    })
}