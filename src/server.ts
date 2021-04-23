import express from "express";
import { routes } from "./routes";
import"./database";

const app = express();
app.use(express.json()) // Definindo que o express ira trabalhar com JSON na rota.
app.use(routes);



app.listen(3333, ()=> console.log("Server is running on port 3333"));