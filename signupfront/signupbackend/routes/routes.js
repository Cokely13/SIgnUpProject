const { response } = require('express')
const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')


router.post('/signup',(request, response)=> {
  const signedUpUser = new signUpTemplateCopy({
    name:request.body.name,
    username:request.body.username,
    password:request.body.password,
    email:request.body.email
  })
  signedUpUser.save()
  .then(data =>{
    response.json(data)
  })
  .catch(error =>{
    response.json(error)
  })
})

module.exports = router
