import CreateTodoM from "../db/CreateTodoModel.js";

const deletetodos = {
  async deleteTodo(req, res, next) {
    try {
      const { id } = req.params;

      // Find the todo item by ID
      const todo = await CreateTodoM.findById(id);

      if (!todo) {
        return res.status(404).json({ message: "Todo item not found" });
      }

      // Delete the todo item
      await todo.deleteOne();

      res.json({ message: "Todo item deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default deletetodos;
