// Import Express
const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Temporary in-memory user list (like a mini database)
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to my Express.js server!");
});

// About route
app.get("/about", (req, res) => {
  res.send("This is the About page!");
});

// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST example (Create user)
app.post("/user", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(`User ${newUser.name} has been added!`);
});

// ✅ PUT example (Update user)
app.put("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedData = req.body;

  const user = users.find(u => u.id === userId);
  if (!user) {
    return res.status(404).send("User not found");
  }

  user.name = updatedData.name || user.name;
  res.send(`User with ID ${userId} has been updated!`);
});

// ✅ DELETE example (Delete user)
app.delete("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(u => u.id !== userId);
  res.send(`User with ID ${userId} has been deleted!`);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
