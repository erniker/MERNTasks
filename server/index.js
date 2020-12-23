const express = require("express");
const dbConect = require("./config/db");
const cors = require("cors");

// Create server
const app = express();

// Conect to db
dbConect();

//Enable cors
app.use(cors());

// Enable express.json
app.use(express.json({ extended: true }));

// App port
const PORT = process.env.PORT || 4000;

// Inmport routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/projects", require("./routes/projects"));
app.use("/api/tasks", require("./routes/tasks"));

// Run app
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
