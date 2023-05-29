const mongoose = require('mongoose')


const roleSchema= new mongoose.Schema({
    role:{
        type: String,
    },
    actions:{
        type: Array,
    }
},
{
    timestamps: true
  })

  module.exports = mongoose.model('role', roleSchema)

