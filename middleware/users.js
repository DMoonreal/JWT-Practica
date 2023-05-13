const jwt = require("jsonwebtoken");
module.exports = {
  validateRegister: (req, res, next) => {
    // username min length 3
    if (!req.body.username || req.body.username.length < 3) {
      return res.status(400).send({
        msg: "Porfavor ingrese un nombre con mas de 3 caracteres",
      });
    }
    // password min 6 chars
    if (!req.body.password || req.body.password.length < 6) {
      return res.status(400).send({
        msg: "Porfavor Ingrese una Contraseña de mas de 6 caracteres",
      });
    }
    // password (repeat) does not match
    if (
      !req.body.password_repeat ||
      req.body.password != req.body.password_repeat
    ) {
      return res.status(400).send({
        msg: "Ambas contraseñas deben concidir",
      });
    }
    next();
  },
};
