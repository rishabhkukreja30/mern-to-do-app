const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const { User } = require("../db/schema");
const { JWT_SECRET } = require("../config");

router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  await User.create({
    username: username,
    password: password,
  });

  res.status(201).json({ msg: "User created successsfullly" });
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const user = await User.findOne({
      username,
      password,
    });

    if (user) {
      const token = jwt.sign({ username }, JWT_SECRET);
      res.status(200).json({ token });
    } else {
      res.status(404).send("User not authenticated");
    }
  } catch (error) {
    console.error(error);
  }
});

router.get("/", async (req, res) => {
  const users = await User.find({});

  res.json({ users: users });
});

module.exports = router;
