const { Router } = require("express");
const router = Router();
const { todoMiddleware } = require("../middlewares/todoMiddleware");
const { Todos } = require("../db/schema");
const { todo } = require("../types");

router.get("/", todoMiddleware, async (req, res) => {
  const todos = await Todos.find({});

  res.status(200).json({ todos });
});

router.post("/", todoMiddleware, async (req, res) => {
  const todo = req.body;
  const parsedTodo = createTodo.safeParse(todo);

  if (!parsedTodo.success) {
    res.status(400).json({
      msg: "You entered incorrect inputs",
    });
  }

  await Todos.create({
    title: todo.title,
    description: todo.description,
    completed: false,
  });

  res.status(201).json({
    msg: "To do created",
  });
});

router.put("/:id", todoMiddleware, async (req, res) => {
  const todo = req.body;
  const parsedTodo = createTodo.safeParse(todo);

  if (!parsedTodo.success) {
    res.status(400).json({
      msg: "You entered incorrect inputs",
    });
  }

  try {
    const updatedItem = await Todos.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { title: todo.title, description: todo.description },
      { new: true, runValidators: true }
    );

    if (!updatedItem) {
      res.status(404).json({ error: "Item not found" });
    }

    res.json(updatedItem);
  } catch (error) {
    console.error("This todo item doesn't exist");
  }
});

module.exports = router;
