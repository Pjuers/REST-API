const express = require("express");
const router = express.Router();
const db = require("../db");

// Alle Nutzer abrufen
router.get("/", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM users");
  res.json(rows);
});

// Nutzer erstellen
router.post("/", async (req, res) => {
  const { name, email } = req.body;
  await db.query("INSERT INTO users (name, email) VALUES (?, ?)", [
    name,
    email,
  ]);
  res.status(201).json({ message: "User created" });
});

// Nutzer aktualisieren
router.put("/:id", async (req, res) => {
  const { name, email } = req.body;
  await db.query("UPDATE users SET name = ?, email = ? WHERE id = ?", [
    name,
    email,
    req.params.id,
  ]);
  res.json({ message: "User updated" });
});

// Nutzer löschen
router.delete("/:id", async (req, res) => {
  await db.query("DELETE FROM users WHERE id = ?", [req.params.id]);
  res.json({ message: "User deleted" });
});

module.exports = router;
