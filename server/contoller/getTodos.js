import CreateTodoM from "../db/CreateTodoModel.js"

const getTodos={
    async gettodo(req,res,next){
        try {
            const todoslist=await CreateTodoM.find()
            res.json(todoslist)
        } catch (error) {
            console.log(error)
        }
    }
}

export default getTodos