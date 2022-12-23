import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [6, 'Password is to short'],
      maxlength: 128,
    },
    image: {
      type: String,
      default: '/avatar.png',
    },
    role: {
      type: [String],
      default: ['User'],
      enum: ['User', 'Moderator', 'Admin'],
    },
    stripe_account_id: '',
    stripe_seller: {},
    stripeSession: {},
  },
  { timestamps: true }
)
export default mongoose.model('User', UserSchema)
