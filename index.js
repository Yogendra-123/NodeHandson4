const express = require('express')
const CONSTANT = require('./config/constant')
const registerRouter = require('./routers/register')
const loginRouter = require('./routers/login')

const app = express()
app.use(express.json())
app.use(registerRouter)
app.use(loginRouter)

app.listen(3001, ()=>{
    console.log('server is running!!');
})