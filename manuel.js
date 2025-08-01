import express from 'express'
import jwt from 'jsonwebtoken'
import cors from 'cors'

const app = express()
app.use(cors())


app.get('/', (req, res) => {
    var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    res.send("This is your jwt token: " + token)
})

const port = 8080
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })