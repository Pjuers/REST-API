const express = require("express");
const app = express();
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");

app.use(express.json());
app.use("/users", usersRouter);
app.use("/products", productsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
