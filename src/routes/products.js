const express = require("express");
const router = express.Router();
const db = require("../db");

// Alle Produkte abrufen
router.get("/", async (req, res) => {
  const [rows] = await db.query("SELECT * FROM products");
  res.json(rows);
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
