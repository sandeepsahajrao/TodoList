import dotenv from 'dotenv';

dotenv.config();

export const {
  APP_PORT,
  dbUsername,
  dbpassword
} = process.env;
