import Material from "../../modelos/Material";
import { Response, Request } from "express";

export const modificarMaterialPorId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { nombreMaterial, color, descripcion, unidadDeMedida, precio } = req.body;

        //Buscar el material
        const material = await Material.findById(id);
        if (!material) {
            res.status(400).json({ error: 'Material no encontrado.' });
            return;
        }
        //Actualizar solo los campos proporcionados:
        if (nombreMaterial) {
            material.nombreMaterial = nombreMaterial;
        }
        if (color) {
            material.color = color;
        }
        if (descripcion){
            material.descripcion = descripcion;
        }
        if (unidadDeMedida) {
            material.unidadDeMedida = unidadDeMedida;
        }
        if (precio){
            material.precio = precio;
        }

        const materialModificado = await material.save();
        res.status(200).json(materialModificado);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al modificar los datos.'});

    }
}