const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:12345@100xdevscohort.odhj1vk.mongodb.net/todo_app"
);

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const User = mongoose.model("User", UserSchema);
const Todos = mongoose.model("Todos", TodoSchema);

module.exports = {
  User,
  Todos,
};
