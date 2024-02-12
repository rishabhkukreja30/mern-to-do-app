const zod = require("zod");

const todo = zod.object({
  title: zod.string(),
  description: zod.string(),
});

module.exports = {
  todo,
};
