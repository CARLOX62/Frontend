const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Express server is running 🚀");
});

app.post("/submit", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin") {
    return res.status(400).json({
      success: false,
      field: "username",
      message: "This username is not allowed",
    });
  }

  res.json({
    success: true,
    message: "Form submitted successfully",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
