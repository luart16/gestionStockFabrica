import { Router } from "express";
import { crearUsuarioControlador,traerUsuarioPorId, traerTodosUsuarios, eliminarUsuarioPorId, modificarUsuarioPorId } from "../controladores/Usuarios";
const usuarioRuta = Router();

usuarioRuta.post('/api/usuario/crear', crearUsuarioControlador); //creo una ruta, que es la que me va a dirigir a crear un usuario.
usuarioRuta.get('/api/usuario/traerUsuarioPorId/:id', traerUsuarioPorId);
usuarioRuta.get('/api/usuario/traerTodosLosUsuarios', traerTodosUsuarios);
usuarioRuta.delete('/api/usuario/eliminarUsuario/:id', eliminarUsuarioPorId);
usuarioRuta.put('/api/usuario/modificarUsuario/:id', modificarUsuarioPorId);

export default usuarioRuta;