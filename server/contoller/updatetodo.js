import CreateTodoM from "../db/CreateTodoModel.js";

const updatetodos = {
  async updatetodoyid(req, res, next) {
    try {
      const { id } = req.params;
      const { name, author } = req.body;
    console.log(name, author);
      // Find the todo item by ID
      const todo = await CreateTodoM.findById(id);
        // console.log(todo);
      if (!todo) {
        return res.status(404).json({ message: "Todo item not found" });
      }

      // Update the name and author values


      todo.name = name;
      todo.author = author;

      // Save the updated todo item
      const updatedTodo = await todo.save();

      res.json(updatedTodo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default updatetodos;
