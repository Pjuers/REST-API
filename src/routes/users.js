const express = require("express");
const router = express.Router();
const db = require("../db");

// Alle Nutzer abrufen
router.get("/", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM users");
  res.json(rows);
});

// Einzelnen User nach ID holen
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]); // ← pool zu db geändert

    if (rows.length === 0) {
      return res.status(404).json({ message: "User nicht gefunden" });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error(err); // ← zeigt dir den Fehler in der Konsole
    res.status(500).json({ error: "Datenbankfehler" });
  }
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
