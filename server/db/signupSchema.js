import mongoose from 'mongoose';

const signUpSchema = mongoose.Schema({
  name: {
    type: String,
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
    minlength: 6,
  },

});

const SignupSchema= mongoose.model('UserData', signUpSchema);
export default SignupSchema

// const CreateTodoM = mongoose.model("User", CreatetodoSchema);
