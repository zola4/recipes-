// established connection between Mongo Dependaecies for our schema 
const mongoose = require('./connections')
// the conecept our data will be presented in. 
const RecipeSchema = new mongoose.Schema(
  {
    title: String,
    descirpition: String,
    instruction: String,
    ingredient: String,
    rating: Number
  }
)
// Grabbing data, and applying model to data

const Recipe = mongoose.model('Recipe', RecipeSchema)
// exports reciepe for rest of the application to use. 
module.export = Recipe
