require('dotenv').config()
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

app.use(express.json())

const posts = [
    {
        'username': "Yunusali",
        'title': "Post 1"
    },
    {
        'username': "Kyle",
        'title': "Post 2"
    }
]
app.get('/', authToken,(req, res) => {
    res.json(posts.filter(post => post.username === req.user.name))
})

function authToken(req,res,next){
    const authHeader  =req.headers['authorization']
    //if we have an auth header and then return the auth header which is split with empty space and the second portion
    //otherwise return null
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}
app.listen(3000)