const {Router} = require('express');
const {check} = require('express-validator');

const { usuariosGet, 
        usuariosPut, 
        usuariosPost, 
        usuariosPatch, 
        usuariosDelete,
      } = require("../controllers/usuarios");
const { validarCampos } = require('../midleware/validar-campos');
const router = Router();

//rutas
router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/', [
  check('nombre', 'El nombre es oblitagorio').not().isEmpty(),
  check('contraseña', 'La contraseña debe de ser de mas de 6 letras').isLength({min:6}),
  check('correo', 'El correo no es valido').isEmail(),
  //check('rol', 'No es un rol permitido').isIn(['ADMIN_ROLE','USER_ROLE']),
  validarCampos
],usuariosPost);

router.delete('/', usuariosPatch);

router.patch('/', usuariosDelete);




module.exports = router;