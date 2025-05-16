import Usuario from "../../modelos/Usuario"; //importo el modelo que define cómo es un usuario (Usuario es el 'molde' para crear usuarios y guardarlo en MongoDB)
import { Response, Request } from "express"; //para decirle a TypeScript: 'esto es lo que entra y esto lo que sale'
import bcrypt from "bcryptjs" //librería para encriptar las contraseñas de forma segura

//Defino los datos que espero recibir(le digo a TypeScript: cuando alguien mande los datos de un nuevo usuario, tienen que venir con estos 4 campos y con esos tipos):
//No estoy creando un objeto, sino que le estoy diciendo a TypeScript que este es el molde que deben seguir los objetos que representen un usuario
interface DatosUsuarios {
    nombreUsuario: string
    email: string
    contrasenia: string
    rol: 'administrador' | 'vendedor',
}

//Función principal del controlador:
export const crearUsuario = async (req: Request, res: Response) => {
    try {
        const { nombreUsuario, email, contrasenia, rol } = req.body as DatosUsuarios; //extraigo los datos del cuerpo del pedido
        const contraseniaEncriptada = await bcrypt.hash(contrasenia, 10); //encripto la contraseña para que no se vea en la BD
        //creo un nuevo usuario y lo guardo en la DB con .save:
        const nuevoUsuario = new Usuario({
            nombreUsuario,
            email,
            contrasenia: contraseniaEncriptada,
            rol
        })
        await nuevoUsuario.save();//aquí guardo el nuevo usuario
        res.status(201).json({ message: 'Usuario creado exitosamente.' });//el código 201 signif. 'creado exitosamente'
    }
    catch (error) {
        res.status(500).json({ error: 'Error al crear el usuario.' }); //el código 500 signif.'error interno del servidor'
        console.log(error)
    }
}