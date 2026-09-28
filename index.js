import express from "express";
import { dbConnect } from "./config/database.js";
import contactRouter from "./routes/contactRoutes.js";

const app = express();
const port = 2000;

// Middlewares
app.use(express.json());
app.use(express.static("public"));

await dbConnect();

app.use("/api/contacts", contactRouter);

app.listen(port, () => {
  console.log(`Server online en puerto: ${port}`);
});
