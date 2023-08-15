require("./config");
const customerInfo = require("./customerInfoSchemaModel");

const express = require("express");

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("lisening on port 3000");
});

app.post("/create", async (req, res) => {
  console.log(req.body);
  const data = new customerInfo(req.body);

  try {
    await data.validate();
    const result = await data.save();
    res.status(201).json(result); // Respond with 201 Created status and saved data
  } catch (error) {
    if (error.name == "ValidationError") {
      res.status(400).send(error.message);
    } else {
      console.error("Server Erro:r", error);
      res.status(500).send("Internal Server Error");
    }
  }
});
