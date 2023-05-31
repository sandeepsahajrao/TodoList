import CreateTodoM from "../db/CreateTodoModel.js"

const createtodos={
    async createTodo(req, res, next){
        try {
            const { name,author}=req.body;
            const createdTodo = new CreateTodoM({
                name: name,
                author: author
            });
            await createdTodo.save(createdTodo)
            res.status(201).json({success: true, createdTodo})
        } catch (error) {
            console.error(`error creating todos ${error.message}`);
            res.status(500).json({ success: false, error: "Failed to create todo" });
        }
    }
}

export default createtodos






