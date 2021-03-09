require("dotenv").config();

export const API = process.env.BASE_URL;

export const ApiGetTaskList = API + "/posts"