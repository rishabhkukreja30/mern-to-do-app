const express = require("express");
const userRouter = require("./routes/user");
const todosRouter = require("./routes/todos");
const app = express();

app.use(express.json());
app.use("/users", userRouter);
app.use("/todos", todosRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
