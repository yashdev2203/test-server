const mongoose = require('mongoose')
const validator = require('validator')

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      index: true
    },
    lastName: {
      type: String,
      required: true,
      index: true
    },
    email: {
      type: String,
      validate: {
        validator: validator.isEmail,
        message: 'EMAIL_IS_NOT_VALID'
      },
      lowercase: true,
      unique: true,
      required: true,
      index: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

module.exports = mongoose.model('User', UserSchema)
