// Create depencies
const Recipe = require('./schema')
const seedData = require('./seeds.json')

// The databse , inserting our seed data into our collection.

Recipe.remove({})
    .then(() => {
      return Recipe.collection.insert(seedData)
    })
    .then(() => {
      process.exit()
    })
