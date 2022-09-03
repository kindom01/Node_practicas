const {response, request} = require('express');
const bcryptjs = require ('bcryptjs');


const Usuario = require('../models/usuario')


const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'no name', apikey, page = 1, limit} = req.query;

    res.json({
        msg: 'get API - usuariosGet',
        q,
        nombre,
        apikey,
        page,
        limit
    });
  }

const usuariosPut = (req, res = response) => {

    const {id} = req.params;

    res.json({
        msg: 'put API - usuariosPut'
    });
  }

  const usuariosPost = async(req, res = response) => {

    



    const {nombre,correo,contraseña, rol} = req.body;
    const usuario = new Usuario( nombre,correo,contraseña, rol );

    const existeEmail = await Usuario.findOne({correo});
    if (existeEmail) {
      return res.status(400).json({
        msg:"Este correo ya esta registrado"
      });
    }
    
    const salt = bcryptjs.genSaltSync();
    usuario.contraseña = bcryptjs.hashSync(contraseña, salt);
    
    await usuario.save();
    
    res.json({
        usuario
    });
  }

  const usuariosPatch = (req, res = response) => {

    res.json({
        msg: 'patch API - usuariosPatch'
    });
  }

  const usuariosDelete = (req, res = response) => {


    res.json({
        msg: 'delete API - usuariosDelete',
    });
  }



  module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete
  }