const express = require("express");
const dbConect = require("./config/db");

// Create server
const app = express();

// Conect to db
dbConect();

// Enable express.json
app.use(express.json({ extended: true }));

// App port
const PORT = process.env.PORT || 4000;

// Inmport routes
app.use("/api/users", require("./routes/users"));

// Run app
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
