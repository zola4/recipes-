



/*
   const express       = require('express')
   // delete this line: 
   // const db            = require('../db/connection')
   const Candidate     = require('../db/schema')
   const router        = express.Router()
   
   // *  change this: 
   // router.get('/', (req, res) => {
   //   res.render('candidates-index', {
   //     candidates: db.candidates
   //   })
   // })
   // *  change to this: 
   router.get('/', (req, res) => {
    Candidate.find({})
      .then((candidates) => {
        res.render('candidates-index', {
          candidates: candidates
        })
      })
   })
   
   //
   
   router.get('/:name', (req, res) => {
     Candidate.findOne({ name: req.params.name })
       .then((candidate) => {
         res.render('candidates-show', {
           candidate: candidate
         })
       })
       .catch((err) => {
         console.log(err)
       })
   })
    
   // Handling post request
   router.post('/', (req, res) => {
     Candidate.create(req.body.candidate)
       .then((candidate) => {
         res.redirect(`/candidates/${candidate.name}`)
       })
       .catch((err) => {
         console.log(err)
       })
   }) 
   
   // Handling put request
   router.put('/:name', (req, res) => {
     Candidate.findOneAndUpdate({ name: req.params.name }, req.body.candidate, { new: true })
       .then((candidate) => {
         res.redirect(`/candidates/${candidate.name}`)
       })
       .catch((err) => {
         console.log(err)
       })
   })
   // Handling delete request
   router.delete('/:name', (req, res) => {
     Candidate.findOneAndRemove({ name: req.params.name })
       .then(() => {
         res.redirect('/candidates')
       })
   })
   
   
   module.exports = router

   */