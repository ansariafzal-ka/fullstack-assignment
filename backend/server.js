require("dotenv").config();

const express = require("express");
const app = express();
const connectDb = require("./src/config/database");
const cardRouter = require("./src/routes/card.routes");
const cors = require("cors");
connectDb();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  })
);
app.use("/api/v1/card", cardRouter);
app.get("/ping", (request, response) => {
  response.send("PING");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
