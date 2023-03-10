const { response } = require('express')
const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')
const bcrypt = require('bcrypt')


router.post('/signup', async(request, response)=> {

  const saltPassword =  await bcrypt.genSalt(10)
  const securePassword = await bcrypt.hash(request.body.password, saltPassword)

  const signedUpUser = new signUpTemplateCopy({
    name:request.body.name,
    username:request.body.username,
    password:securePassword,
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
