require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json({ limit: '10mb' }))
app.use(express.static(path.join(__dirname, '../frontend')))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio', {
 
}).then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log('⚠️  MongoDB not connected:', err.message))

app.get('/api/health', (req, res) => {
  res.json({ status: '✅ Server running', timestamp: new Date().toISOString(), threeJSReady: true })
})

app.listen(PORT, () => {
  console.log(`🚀 Server: http://localhost:${PORT}`)
})