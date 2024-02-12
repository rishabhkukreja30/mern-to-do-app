const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function todoMiddleware(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    res.json({ msg: "please provide valid token" });
  }
  const words = token.split(" ");
  const jwtToken = words[1];

  try {
    const decoded = jwt.verify(jwtToken, JWT_SECRET);
    if (decoded.username) {
      next();
    } else {
      res.status(401).json({
        msg: "You are not authenticated",
      });
    }
  } catch (error) {
    res.json({ msg: "Invalid credentials" });
  }
}

module.exports = {
  todoMiddleware,
};
