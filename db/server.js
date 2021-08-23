const mongoose = require('mongoose')

const db = {}
db.connect = async (dbName = "todo-list", port = 27017) => {
  const url = `mongodb://localhost:${port}/${dbName}`
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("Connected to the database");
  } catch (err) {
    console.log("Cannot connect to the database", err)
    process.exit()
  }
}

module.exports = db