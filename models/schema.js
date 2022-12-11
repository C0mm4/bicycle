import mongoose from 'mongoose';
import { interpolateAs } from 'next/dist/shared/lib/router/router';
import { stringify } from 'postcss';

const userSchema = new mongoose.Schema({
  userid: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  tel: {
    type: String,
    required: true,
  },
});

const productSchema = new mongoose.Schema({
  productName:{
    type: String,
    required: true,
  },
  productPrice:{
    type: Number,
    
  },
  company:{
    type: String,
    require: true,
  },
  gears:{
    type: Number,
  },
  breakType:{
    type: String,
  },
  material:{
    type: String,
  },
  weight:{
    type: Number,
  },
  isFrame:{
    type: Boolean,
  },
  productURL:{
    type: String,
    require : true
  },
  imgURL:{
    type: String,
    require : true
  }
})

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
