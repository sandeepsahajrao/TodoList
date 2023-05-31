import Joi from 'joi';
import SignupSchema from '../db/signupSchema.js';
const signIn = {

  async signIntod(req, res, next) {

    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    });

    try {
      const { error, value } = schema.validate(req.body);

      if (error) {
        res.status(400).json({ error: error.details[0].message });
        return;
      }

      const { email, password } = value;

      // Add your logic here to handle the sign-in process

      // Example code to check if the user exists and the password matches
      const user = await SignupSchema.findOne({ email });

      if (!user || user.password !== password) {
        res.status(401).json({ error: "Invalid credentials" });
        return;
      }

      // Example code to send a response
      res.json({ message: "Sign-in successful", user });
    } catch (error) {
      next(error);
    }
  },
};

export default signIn;
