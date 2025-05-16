import Material from "../../modelos/Material";
import { Response, Request } from "express";

export const traerTodosLosMateriales = async (req: Request, res: Response) => {
    try {
        const materiales = await Material.find()
        if (materiales.length === 0) { // Verificar si el array está vacío
            res.status(404).json({ error: 'No hay materiales registrados' });
            return;
        }
        const todosLosMateriales = materiales.map(material => ({
            _id: material._id,
            nombreMaterial: material.nombreMaterial,
            color: material.color,
            descripcion: material.descripcion,
            unidadDeMedida: material.unidadDeMedida,
            precio: material.precio,

        }));
        res.status(200).json(todosLosMateriales);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al traer los materiales.' })
        console.log(error)
    }
}