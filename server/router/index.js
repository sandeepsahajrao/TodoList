import Express from "express";

import signupContoller from "../contoller/signupController.js";
import createtodos from "../contoller/createtodo.js";
import getTodos from "../contoller/getTodos.js";
import updatetodos from "../contoller/updatetodo.js";
import deletetodos from "../contoller/deleteTodo.js";
import signIn from "../contoller/signin.js";
const router=Express.Router();

router.post('/todos/signup',signupContoller.signup);

router.post('/todos/signin',signIn.signIntod);

router.post('/todos',createtodos.createTodo);

router.get('/todos',getTodos.gettodo);

router.put('/todos/:id',updatetodos.updatetodoyid);

router.delete('/todos/:id',deletetodos.deleteTodo)





export default router