import Material from "../../modelos/Material";
import { Response, Request } from "express";

export const eliminarMaterialPorId = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const material = await Material.findByIdAndDelete(id);
        if (!material) {
            res.status(400).json({ error: 'Material no encontrado.' });
            return;
        }
        res.status(200).json('Material eliminado correctamente.');
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar el material.' });
        console.log(error);
    }
}