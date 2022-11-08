import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("iAlu");
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (!err) {
      res.redirect("/login");
    } else {
      res.status(500).send("Error al cerrar sesión");
    }
  });
})

export default router;
