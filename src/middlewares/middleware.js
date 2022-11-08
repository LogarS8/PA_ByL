export const userFLow = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    req.session.data = {message: "Inicia sesión para continuar"};
    req.session.save((err) => {
      if (!err) {
        res.redirect("/login");
      } else {
        res.status(500).send("Error al guardar la sesión");
      }
    });
  }
}