import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.send("Hello, world!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
