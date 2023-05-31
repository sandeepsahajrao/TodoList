import mongoose from "mongoose";

const CreatetodoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

const CreateTodoM = mongoose.model("User", CreatetodoSchema);

export default CreateTodoM;
