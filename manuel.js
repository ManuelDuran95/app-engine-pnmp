import express from 'express'
import jwt from 'jsonwebtoken'
import cors from 'cors'

const app = express()
app.use(cors())


app.get('/', (req, res) => {
     const secretKey = 'example-signature-2srd';
     const payload = {
        userId: '123',
        username: 'exampleUser',
        role: 'admin'
    };
   const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
    res.send("This is your admin jwt token: " + token)
})
app.get('/hello', (req, res) => {
     const secretKey = 'example-signature-2srd';
     const payload = {
        userId: '123',
        username: 'exampleUser2',
        role: 'user'
    };
   const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
    res.send("This is your user jwt token: " + token)
})
app.get('/probador', (req, res) => {
     const secretKey = 'example-signature-2srd';
     const payload = {
        userId: '123',
        username: 'exampleUser2',
        role: 'user'
    };
   const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
     const payload={error:"unable to make the request"};
    res.status(500).send(payload)
})
const port = 8080
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
