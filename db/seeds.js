// Create depencies
const Recipe = require('./schema')
const seedData = require('./seeds.json')

// Clears our previous quireies, inserting our seed data into our collection.

Recipe.remove({})
    .then(() => {
      return Recipe.collection.insert(seedData)
    })
    .then(() => {
      process.exit()
    })
