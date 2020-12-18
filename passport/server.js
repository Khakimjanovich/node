const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')

const initializePassport = require('passport-config')
initializePassport(passport)

const users = []

app.set('view-engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs', {name: "Yunusali"})
})
app.get('/login', (req, res) => {
    res.render('auth/login.ejs')
})
app.get('/register', (req, res) => {
    res.render('auth/register.ejs')
})
app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('login')
    } catch (e) {
        res.redirect('/register')
    }
    console.log(users,req.body)
})
app.post('/login', (req, res) => {
    console.log(req.body.json)
    res.render('index.ejs')
})


app.listen(3002)