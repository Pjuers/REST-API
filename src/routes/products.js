const express = require("express");
const router = express.Router();
const db = require("../db");

// Alle Produkte abrufen
router.get("/", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM products");
  res.json(rows);
});

// Einzelnes Produkt nach ID holen
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await db.query("SELECT * FROM products WHERE id = ?", [id]); // pool -> db

    if (rows.length === 0) {
      return res.status(404).json({ message: "Produkt nicht gefunden" });
    }

    res.json(rows[0]);
  } catch (err) {
    console.error(err); // ← loggt den Fehler in der Konsole
    res.status(500).json({ error: "Datenbankfehlerlakjsdfasdkf" });
  }
});

// Produkt erstellen
router.post("/", async (req, res) => {
  const { name, price } = req.body;
  await db.query("INSERT INTO products (name, price) VALUES (?, ?)", [
    name,
    price,
  ]);
  res.status(201).json({ message: "Product created" });
});

// Produkt aktualisieren
router.put("/:id", async (req, res) => {
  const { name, price } = req.body;
  await db.query("UPDATE products SET name = ?, price = ? WHERE id = ?", [
    name,
    price,
    req.params.id,
  ]);
  res.json({ message: "Product updated" });
});

// Produkt löschen
router.delete("/:id", async (req, res) => {
  await db.query("DELETE FROM products WHERE id = ?", [req.params.id]);
  res.json({ message: "Product deleted" });
});

module.exports = router;
