import Joi from 'joi';
import SignupSchema from '../db/signupSchema.js';

const signupController = {
  async signup(req, res, next) {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
    });

    try {
      const { error, value } = schema.validate(req.body);

      if (error) {
        res.status(400).json({ error: error.details[0].message });
        return;
      }

      const { name, email, password } = value;

      // Add your logic here to handle the signup process

      // Example code to create a user
      const newUser = new SignupSchema({
        name,
        email,
        password,
      });

      // Example code to save the newUser to the database
      const savedUser = await newUser.save();

      // Example code to send a response
      res.json({ message: 'Signup successful', user: savedUser,statusbar: 'success' });
    } catch (error) {
      next(error);
    }
  },
};

export default signupController;
