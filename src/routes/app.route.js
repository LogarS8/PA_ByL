import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  const rol = req.session?.user?.rolUsu
  if(rol==="alumno"){
    res.render("iAlu");
  } else {
    res.render("iDoc")
  }
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
