const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors({
  origin: 'http://localhost:4000'
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Rest Api'
  })
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})